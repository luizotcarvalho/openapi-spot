from pathlib import Path

from django.apps import AppConfig
from django.utils.autoreload import autoreload_started


def watch_api_spec(sender, **kwargs):
    sender.extra_files.add(Path("../api.yaml"))


class PetsConfig(AppConfig):
    default_auto_field = "django.db.models.BigAsdutoField"
    name = "pets"

    def ready(self):
        autoreload_started.connect(watch_api_spec)
