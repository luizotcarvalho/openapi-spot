from django.http import JsonResponse


def list_pets(request):
    return JsonResponse(
        [
            {"id": 1, "name": "Mittens", "tag": "cat"},
            {"id": 2, "name": "Kate", "tag": "dog"},
        ],
        safe=False,
    )


def get_pet(request, id):
    return JsonResponse(
        {
            "id": request.openapi.parameters.path.get("id"),
            "name": "Mittens",
            "tag": "cat",
        },
        safe=False,
    )
