from django.http import JsonResponse


def list_pets(request):
    return JsonResponse([{"id": 1, "name": "Mittens", "tag": "cat"}], safe=False)
