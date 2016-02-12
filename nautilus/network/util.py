import json
import requests
import socket

def query_graphql_service(url, name, fields, filters = {}):
    """ A graphql query wrapper factory"""

    # construct the argument string out of the given dictionary
    argString = ', '.join(['{}: {}'.format(key, json.dumps(value)) for key,value in filters.items()])
    args = "(%s)" % argString if len(argString) > 0  else ''

    # construct the field string
    fieldList = ', '.join(fields)

    # build the query out of the given paramters
    query = """
        query {
            %s %s {
                %s
            }
        }
    """ % (name, args, fieldList)

    # query the service to retrieve the data
    dataRequest = requests.get(url + '?query='   + query).json()
    # if there is an error
    if 'errors' in dataRequest:
        raise RuntimeError(dataRequest['errors'])
    # otherwise there is no error
    else:
        # return the data
        return dataRequest['data'][name]


def query_service(service, fields, filters = {}):
    '''
        Apply the given filters to a query of a model service given its name
        and the desired fields.
    '''
    # necessary imports
    from nautilus.network.registry import service_location_by_name
    from nautilus.conventions import root_query

    # query the target using model service conventions
    return query_graphql_service(
        url = 'http://{}'.format(service_location_by_name(service)),
        name = root_query(service),
        fields = fields,
        filters = filters
    )


def combine_action_handlers(*args):
    """
        This function combines the given action handlers into a single function
        which will call all of them.
    """
    # the combined action handler
    def combinedActionHandler(type, payload):
        # goes over every given handler
        for handler in args:
            # call the handler
            handler(type, payload)

    # return the combined action handler
    return combinedActionHandler
