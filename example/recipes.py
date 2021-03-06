"""
    This service maintains the list of recipes in our cloud.
"""

# third party imports
from nautilus import ModelService
# third party imports
from nautilus.models import BaseModel, fields

class Recipe(BaseModel):
    name = fields.CharField()

class ServiceConfig:
    database_url = 'sqlite:///recipes.db'

class RecipeService(ModelService):
    model = Recipe
    config = ServiceConfig

# create a service manager to run the service
manager = ServiceManager(RecipeService)

if __name__ == '__main__':
    manager.run()
