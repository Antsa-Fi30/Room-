import os
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import DocumentsSerializer
from .models import Document
from helpers.pdf_converter import pdf_to_svg
from django.conf import settings


# Create your views here.
class FileUploadView(APIView):
    serializer_class = DocumentsSerializer

    def get(self, request, *args, **kwargs):  # Lists of file uploaded
        documents = Document.objects.all()
        serializer = self.serializer_class(documents, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):  # Upload function
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, *args, **kwargs):  # deleting one file at once
        try:
            document = Document.objects.get(id=id)
            document.delete()
            return Response(
                {"message": "Document deleted."}, status=status.HTTP_204_NO_CONTENT
            )
        except Document.DoesNotExist:
            return Response(
                {"error": "Document not found."}, status=status.HTTP_404_NOT_FOUND
            )


class FileToSVG(APIView):
    def get(self, request, id, *args, **kwargs):
        try:
            document = Document.objects.get(id=id)
            pdf_path = document.file.path

            svg_data, svg_url = pdf_to_svg(pdf_path)

            return Response(
                {"svg_data": svg_data, "URL": request.build_absolute_uri(svg_url)},
                status=status.HTTP_200_OK,
            )
        except Document.DoesNotExist:
            return Response(
                {"error": "Document not found."}, status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response(
                {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


# Compare this snippet from documents/urls.py:
