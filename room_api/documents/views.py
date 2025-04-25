from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import DocumentsSerializer
from .models import Document


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
