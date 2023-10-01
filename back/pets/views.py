from django.http import JsonResponse
from django.http.response import HttpResponse
from django.views.decorators.csrf import csrf_exempt


def list_pets(request):
    return JsonResponse(
        [
            {"id": 1, "name": "Mittens", "tag": "cat"},
            {"id": 2, "name": "Kate", "tag": "dog"},
        ],
        safe=False,
    )


@csrf_exempt
def create_pet(request):
    return JsonResponse(
        {"id": 3, "name": request.openapi.body.get("name"), "tag": "cat"},
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


@csrf_exempt
def delete_pet(request, id):
    return HttpResponse(status=204)
