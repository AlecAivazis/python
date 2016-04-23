Search.setIndex({envversion:47,filenames:["handlers/index","index","internals/index","internals/nautilus.api","internals/nautilus.api.endpoints","internals/nautilus.api.endpoints.requestHandlers","internals/nautilus.api.executor","internals/nautilus.api.fields","internals/nautilus.api.objectTypes","internals/nautilus.auth","internals/nautilus.auth.exceptions","internals/nautilus.auth.models","internals/nautilus.auth.models.fields","internals/nautilus.auth.models.mixins","internals/nautilus.auth.primitives","internals/nautilus.auth.requestHandlers","internals/nautilus.auth.requestHandlers.forms","internals/nautilus.config","internals/nautilus.contrib","internals/nautilus.contrib.graphene_peewee","internals/nautilus.conventions","internals/nautilus.management","internals/nautilus.management.scripts","internals/nautilus.management.util","internals/nautilus.models","internals/nautilus.models.fields","internals/nautilus.models.serializers","internals/nautilus.network","internals/nautilus.network.amqp","internals/nautilus.network.amqp.actionHandlers","internals/nautilus.network.amqp.consumers","internals/nautilus.network.http","internals/nautilus.network.registry","internals/nautilus.network.util","internals/nautilus.services","intro/api","intro/auth","intro/connecting_services","intro/first_service","intro/index","intro/installation","schema/index","services/index","utilities/index"],objects:{"":{nautilus:[2,0,0,"-"]},"nautilus.AuthService":{init_db:[42,5,1,""]},"nautilus.ConnectionService":{get_base_models:[42,5,1,""]},"nautilus.ModelService":{get_models:[42,5,1,""],init_db:[42,5,1,""]},"nautilus.Service":{add_http_endpoint:[42,5,1,""],route:[42,6,1,""],run:[42,5,1,""],stop:[42,5,1,""]},"nautilus.api":{ServiceObjectType:[41,1,1,""],create_model_schema:[41,3,1,""],endpoints:[4,0,0,"-"],executor:[6,0,0,"-"],fields:[7,0,0,"-"],filter:[3,0,0,"-"],helpers:[3,0,0,"-"],objectTypes:[8,0,0,"-"],schema:[3,0,0,"-"]},"nautilus.api.ServiceObjectType":{"__getattr__":[41,5,1,""],connections:[41,6,1,""],true_fields:[41,6,1,""]},"nautilus.api.endpoints":{requestHandlers:[5,0,0,"-"]},"nautilus.api.endpoints.requestHandlers":{graphiql:[5,0,0,"-"],graphql:[5,0,0,"-"]},"nautilus.api.endpoints.requestHandlers.graphiql":{GraphiQLRequestHandler:[5,1,1,""]},"nautilus.api.endpoints.requestHandlers.graphiql.GraphiQLRequestHandler":{get:[5,5,1,""],initialize:[5,5,1,""]},"nautilus.api.endpoints.requestHandlers.graphql":{GraphQLRequestHandler:[5,1,1,""]},"nautilus.api.endpoints.requestHandlers.graphql.GraphQLRequestHandler":{get:[5,5,1,""],initialize:[5,5,1,""],request_context:[5,2,1,""]},"nautilus.api.executor":{executor:[6,0,0,"-"],executorMiddleware:[6,0,0,"-"]},"nautilus.api.executor.executor":{TornadoExecutor:[6,1,1,""]},"nautilus.api.executor.executor.TornadoExecutor":{execute:[6,5,1,""]},"nautilus.api.executor.executorMiddleware":{TornadoExecutionMiddleware:[6,1,1,""],async_field:[6,3,1,""],execute_async_resolver:[6,3,1,""],is_async_field:[6,3,1,""]},"nautilus.api.executor.executorMiddleware.TornadoExecutionMiddleware":{execution_result:[6,7,1,""],run_resolve_fn:[6,7,1,""]},"nautilus.api.fields":{connection:[7,0,0,"-"],list:[7,0,0,"-"]},"nautilus.api.fields.connection":{Connection:[7,1,1,""]},"nautilus.api.fields.connection.Connection":{resolve_service:[7,5,1,""]},"nautilus.api.fields.list":{List:[7,3,1,""]},"nautilus.api.filter":{args_for_model:[3,3,1,""],filter_model:[3,3,1,""]},"nautilus.api.helpers":{create_model_schema:[3,3,1,""],fields_for_model:[3,3,1,""]},"nautilus.api.objectTypes":{serviceObjectType:[8,0,0,"-"]},"nautilus.api.objectTypes.serviceObjectType":{ServiceObjectType:[8,1,1,""],ServiceObjectTypeMeta:[8,1,1,""],ServiceObjectTypeOptions:[8,1,1,""]},"nautilus.api.objectTypes.serviceObjectType.ServiceObjectType":{"__getattr__":[8,5,1,""],List:[8,2,1,""],NonNull:[8,2,1,""],connections:[8,6,1,""],service:[8,2,1,""],true_fields:[8,6,1,""]},"nautilus.api.objectTypes.serviceObjectType.ServiceObjectTypeMeta":{construct:[8,5,1,""],options_class:[8,2,1,""]},"nautilus.api.objectTypes.serviceObjectType.ServiceObjectTypeOptions":{contribute_to_class:[8,5,1,""]},"nautilus.api.schema":{AsyncSchema:[3,1,1,""]},"nautilus.auth":{decorators:[9,0,0,"-"],exceptions:[10,0,0,"-"],models:[11,0,0,"-"],primitives:[14,0,0,"-"],random_string:[9,3,1,""],requestHandlers:[15,0,0,"-"]},"nautilus.auth.exceptions":{AuthorizationError:[10,4,1,""]},"nautilus.auth.models":{fields:[12,0,0,"-"],mixins:[13,0,0,"-"],userPassword:[11,0,0,"-"]},"nautilus.auth.models.fields":{password:[12,0,0,"-"]},"nautilus.auth.models.fields.password":{PasswordField:[12,1,1,""]},"nautilus.auth.models.fields.password.PasswordField":{db_field:[12,2,1,""],db_value:[12,5,1,""],python_value:[12,5,1,""]},"nautilus.auth.models.mixins":{hasPassword:[13,0,0,"-"],user:[13,0,0,"-"]},"nautilus.auth.models.mixins.hasPassword":{HasPassword:[13,1,1,""]},"nautilus.auth.models.mixins.hasPassword.HasPassword":{DoesNotExist:[13,2,1,""],id:[13,2,1,""],model_name:[13,2,1,""],password:[13,2,1,""]},"nautilus.auth.models.mixins.user":{User:[13,1,1,""]},"nautilus.auth.models.mixins.user.User":{DoesNotExist:[13,2,1,""],email:[13,2,1,""],firstname:[13,2,1,""],id:[13,2,1,""],lastname:[13,2,1,""],model_name:[13,2,1,""]},"nautilus.auth.models.userPassword":{UserPassword:[11,1,1,""]},"nautilus.auth.models.userPassword.UserPassword":{DoesNotExist:[11,2,1,""],id:[11,2,1,""],model_name:[11,2,1,""],password:[11,2,1,""],user:[11,2,1,""]},"nautilus.auth.primitives":{passwordHash:[14,0,0,"-"]},"nautilus.auth.primitives.passwordHash":{PasswordHash:[14,1,1,""]},"nautilus.auth.primitives.passwordHash.PasswordHash":{"__eq__":[14,5,1,""],"__repr__":[14,5,1,""],"new":[14,6,1,""],coerce:[14,6,1,""],rehash:[14,5,1,""]},"nautilus.auth.requestHandlers":{base:[15,0,0,"-"],forms:[16,0,0,"-"],login:[15,0,0,"-"],logout:[15,0,0,"-"],register:[15,0,0,"-"]},"nautilus.auth.requestHandlers.base":{AuthRequestHandler:[15,1,1,""]},"nautilus.auth.requestHandlers.base.AuthRequestHandler":{get_current_user:[15,5,1,""],get_login_url:[15,5,1,""],login_user:[15,5,1,""],logout_user:[15,5,1,""]},"nautilus.auth.requestHandlers.forms":{change:[16,0,0,"-"],forgot:[16,0,0,"-"],login:[16,0,0,"-"],register:[16,0,0,"-"]},"nautilus.auth.requestHandlers.forms.change":{ChangePasswordForm:[16,1,1,""]},"nautilus.auth.requestHandlers.forms.change.ChangePasswordForm":{password:[16,2,1,""],password_again:[16,2,1,""],validate_password_again:[16,5,1,""]},"nautilus.auth.requestHandlers.forms.forgot":{ForgotPasswordForm:[16,1,1,""]},"nautilus.auth.requestHandlers.forms.forgot.ForgotPasswordForm":{email:[16,2,1,""]},"nautilus.auth.requestHandlers.forms.login":{LoginForm:[16,1,1,""]},"nautilus.auth.requestHandlers.forms.login.LoginForm":{email:[16,2,1,""],password:[16,2,1,""]},"nautilus.auth.requestHandlers.forms.register":{RegistrationForm:[16,1,1,""]},"nautilus.auth.requestHandlers.forms.register.RegistrationForm":{email:[16,2,1,""],password:[16,2,1,""]},"nautilus.auth.requestHandlers.login":{LoginHandler:[15,1,1,""]},"nautilus.auth.requestHandlers.login.LoginHandler":{get:[15,5,1,""],post:[15,5,1,""]},"nautilus.auth.requestHandlers.logout":{LogoutHandler:[15,1,1,""]},"nautilus.auth.requestHandlers.logout.LogoutHandler":{get:[15,5,1,""]},"nautilus.auth.requestHandlers.register":{RegisterHandler:[15,1,1,""]},"nautilus.auth.requestHandlers.register.RegisterHandler":{get:[15,5,1,""],post:[15,5,1,""]},"nautilus.config":{config:[17,0,0,"-"]},"nautilus.config.config":{Config:[17,1,1,""]},"nautilus.config.config.Config":{"__getattr__":[17,5,1,""],"__setattr__":[17,5,1,""]},"nautilus.contrib":{graphene_peewee:[19,0,0,"-"]},"nautilus.contrib.graphene_peewee":{converter:[41,3,1,""],objectType:[19,0,0,"-"]},"nautilus.contrib.graphene_peewee.converter":{convert_field_to_bool:[19,3,1,""],convert_field_to_float:[19,3,1,""],convert_field_to_int:[19,3,1,""],convert_field_to_pk:[19,3,1,""],convert_field_to_string:[19,3,1,""],convert_peewee_field:[19,3,1,""]},"nautilus.contrib.graphene_peewee.objectType":{PeeweeObjectType:[19,1,1,""],PeeweeObjectTypeMeta:[19,1,1,""],PeeweeObjectTypeOptions:[19,1,1,""]},"nautilus.contrib.graphene_peewee.objectType.PeeweeObjectType":{List:[19,2,1,""],NonNull:[19,2,1,""],model:[19,2,1,""]},"nautilus.contrib.graphene_peewee.objectType.PeeweeObjectTypeMeta":{construct:[19,5,1,""],options_class:[19,2,1,""]},"nautilus.contrib.graphene_peewee.objectType.PeeweeObjectTypeOptions":{contribute_to_class:[19,5,1,""]},"nautilus.conventions":{actions:[20,0,0,"-"],models:[20,0,0,"-"],schema:[20,0,0,"-"],services:[20,0,0,"-"]},"nautilus.conventions.actions":{change_action_status:[20,3,1,""],get_crud_action:[20,3,1,""]},"nautilus.conventions.models":{get_model_string:[20,3,1,""]},"nautilus.conventions.schema":{root_query:[20,3,1,""]},"nautilus.conventions.services":{api_gateway_name:[20,3,1,""],auth_service_name:[20,3,1,""],connection_service_name:[20,3,1,""],model_service_name:[20,3,1,""]},"nautilus.database":{init_db:[2,3,1,""]},"nautilus.management":{scripts:[22,0,0,"-"],util:[23,0,0,"-"]},"nautilus.management.scripts":{create:[22,0,0,"-"]},"nautilus.management.util":{render_template:[23,3,1,""]},"nautilus.models":{base:[24,0,0,"-"],fields:[25,0,0,"-"],serializers:[26,0,0,"-"],util:[24,0,0,"-"]},"nautilus.models.base":{BaseModel:[24,1,1,""]},"nautilus.models.base.BaseModel":{DoesNotExist:[24,2,1,""],fields:[24,6,1,""],id:[24,2,1,""],model_name:[24,2,1,""],primary_key:[24,6,1,""],required_fields:[24,6,1,""]},"nautilus.models.serializers":{modelSerializer:[26,0,0,"-"]},"nautilus.models.serializers.modelSerializer":{ModelSerializer:[26,1,1,""]},"nautilus.models.serializers.modelSerializer.ModelSerializer":{"default":[26,5,1,""],serialize:[26,5,1,""]},"nautilus.models.util":{create_connection_model:[24,3,1,""]},"nautilus.network":{amqp:[28,0,0,"-"],http:[31,0,0,"-"],registry:[32,0,0,"-"],util:[33,0,0,"-"]},"nautilus.network.amqp":{actionHandlers:[29,0,0,"-"],combine_action_handlers:[0,3,1,""],consumers:[30,0,0,"-"],create_handler:[0,3,1,""],crud_handler:[0,3,1,""],delete_handler:[0,3,1,""],dispatch:[28,0,0,"-"],update_handler:[0,3,1,""],util:[28,0,0,"-"]},"nautilus.network.amqp.actionHandlers":{createHandler:[29,0,0,"-"],crudHandler:[29,0,0,"-"],deleteHandler:[29,0,0,"-"],noop_handler:[29,3,1,""],updateHandler:[29,0,0,"-"]},"nautilus.network.amqp.actionHandlers.createHandler":{create_handler:[29,3,1,""]},"nautilus.network.amqp.actionHandlers.crudHandler":{crud_handler:[29,3,1,""]},"nautilus.network.amqp.actionHandlers.deleteHandler":{delete_handler:[29,3,1,""]},"nautilus.network.amqp.actionHandlers.updateHandler":{update_handler:[29,3,1,""]},"nautilus.network.amqp.consumers":{actions:[30,0,0,"-"],amqp:[30,0,0,"-"]},"nautilus.network.amqp.consumers.actions":{ActionHandler:[30,1,1,""]},"nautilus.network.amqp.consumers.actions.ActionHandler":{DURABLE:[30,2,1,""],EXCHANGE:[30,2,1,""],EXCHANGE_TYPE:[30,2,1,""],ROUTING_KEY:[30,2,1,""]},"nautilus.network.amqp.consumers.amqp":{AMQPConsumer:[30,1,1,""]},"nautilus.network.amqp.consumers.amqp.AMQPConsumer":{DURABLE:[30,2,1,""],EXCHANGE:[30,2,1,""],EXCHANGE_TYPE:[30,2,1,""],ROUTING_KEY:[30,2,1,""],acknowledge_message:[30,5,1,""],add_on_cancel_callback:[30,5,1,""],add_on_channel_close_callback:[30,5,1,""],add_on_connection_close_callback:[30,5,1,""],close_channel:[30,5,1,""],close_connection:[30,5,1,""],connect:[30,5,1,""],handle_event:[30,5,1,""],on_bindok:[30,5,1,""],on_cancelok:[30,5,1,""],on_channel_closed:[30,5,1,""],on_channel_open:[30,5,1,""],on_connection_closed:[30,5,1,""],on_connection_open:[30,5,1,""],on_consumer_cancelled:[30,5,1,""],on_exchange_declareok:[30,5,1,""],on_message:[30,5,1,""],on_queue_declareok:[30,5,1,""],open_channel:[30,5,1,""],publish:[30,5,1,""],reconnect:[30,5,1,""],run:[30,5,1,""],setup_exchange:[30,5,1,""],start_consuming:[30,5,1,""],stop:[30,5,1,""],stop_consuming:[30,5,1,""]},"nautilus.network.amqp.dispatch":{dispatch:[28,3,1,""],dispatch_action:[28,3,1,""]},"nautilus.network.amqp.util":{combine_action_handlers:[28,3,1,""]},"nautilus.network.http":{requestHandler:[31,0,0,"-"]},"nautilus.network.http.requestHandler":{RequestHandler:[31,1,1,""]},"nautilus.network.http.requestHandler.RequestHandler":{post:[31,5,1,""]},"nautilus.network.registry":{deregister_service:[32,3,1,""],get_services:[32,3,1,""],keep_alive:[32,3,1,""],register_service:[32,3,1,""],service_location_by_name:[32,3,1,""]},"nautilus.network.util":{query:[33,0,0,"-"]},"nautilus.network.util.query":{combine_action_handlers:[33,3,1,""],query_api:[33,3,1,""],query_graphql_service:[33,3,1,""],query_service:[33,3,1,""],wait_for_response:[33,3,1,""]},"nautilus.services":{apiGateway:[34,0,0,"-"],authService:[34,0,0,"-"],connectionService:[34,0,0,"-"],modelService:[34,0,0,"-"],service:[34,0,0,"-"],serviceManager:[34,0,0,"-"]},"nautilus.services.apiGateway":{APIGateway:[34,1,1,""]},"nautilus.services.apiGateway.APIGateway":{name:[34,2,1,""]},"nautilus.services.authService":{AuthService:[34,1,1,""],Login:[34,1,1,""],Logout:[34,1,1,""],Register:[34,1,1,""]},"nautilus.services.authService.AuthService":{get_models:[34,5,1,""],init_db:[34,5,1,""],name:[34,2,1,""]},"nautilus.services.connectionService":{ConnectionService:[34,1,1,""]},"nautilus.services.connectionService.ConnectionService":{action_handler:[34,2,1,""],get_base_models:[34,5,1,""],services:[34,2,1,""]},"nautilus.services.modelService":{ModelService:[34,1,1,""]},"nautilus.services.modelService.ModelService":{action_handler:[34,2,1,""],additional_action_handler:[34,5,1,""],get_models:[34,5,1,""],init_db:[34,5,1,""],model:[34,2,1,""],name:[34,2,1,""]},"nautilus.services.service":{Service:[34,1,1,""],ServiceMetaClass:[34,1,1,""]},"nautilus.services.service.Service":{action_handler:[34,2,1,""],add_http_endpoint:[34,5,1,""],config:[34,2,1,""],init_action_handler:[34,5,1,""],init_app:[34,5,1,""],init_keep_alive:[34,5,1,""],name:[34,2,1,""],route:[34,6,1,""],run:[34,5,1,""],schema:[34,2,1,""],stop:[34,5,1,""]},"nautilus.services.serviceManager":{ServiceManager:[34,1,1,""]},"nautilus.services.serviceManager.ServiceManager":{run:[34,5,1,""]},nautilus:{APIGateway:[42,1,1,""],AuthService:[42,1,1,""],ConnectionService:[42,1,1,""],ModelService:[42,1,1,""],Service:[42,1,1,""],api:[3,0,0,"-"],auth:[9,0,0,"-"],config:[17,0,0,"-"],contrib:[18,0,0,"-"],conventions:[20,0,0,"-"],database:[2,0,0,"-"],management:[21,0,0,"-"],models:[24,0,0,"-"],network:[27,0,0,"-"],services:[34,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"],"4":["py","exception","Python exception"],"5":["py","method","Python method"],"6":["py","classmethod","Python class method"],"7":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:function","4":"py:exception","5":"py:method","6":"py:classmethod","7":"py:staticmethod"},terms:{"0x109463208":16,"0x109463358":16,"0x10948e128":16,"__eq__":14,"__getattr__":[8,17,41],"__main__":[35,37,38],"__name__":[35,37,38],"__repr__":14,"__setattr__":17,"abstract":14,"case":[0,30,38,41],"class":[3,5,6,7,8,11,12,13,14,15,16,17,19,24,26,30,31,34,35,36,37,38,41,42],"default":[12,20,26,34,38,42],"final":38,"function":[0,2,3,6,7,12,15,20,23,26,28,29,33,34,36,37,38,41,42],"import":[0,31,34,35,36,37,38,41,42],"int":[12,30,34,42],"new":[0,14,16,29,30,35,36,37,38,41],"null":12,"return":[0,3,8,12,15,20,24,29,30,32,34,36,38,41,42],"short":38,"static":6,"true":[26,30,34,36,42],"try":[35,38],"while":[1,12,35,38],abl:[35,36,37,41],about:[1,34,35,38,42],abov:36,access:[34,42],accomplish:40,accord:42,account:36,ack:30,acknowledg:30,acknowledge_messag:30,act:[6,7,34,35,42],action_handl:[0,34,38,42],action_handler1:0,action_handler2:0,action_typ:[0,20,28,29,30,34,38],actionhandl:[2,27,28],activ:32,add:[0,12,30,32,35,36,37,38],add_http_endpoint:[34,42],add_model:38,add_model_to_admin:38,add_on_cancel_callback:30,add_on_channel_close_callback:30,add_on_connection_close_callback:30,addit:38,additional_action_handl:34,additonal_action_handl:[34,42],address:16,admin:[37,38],administr:1,again:[16,30,37],agent:40,ahead:[35,36],alchemi:24,alia:[8,11,13,19,24],all:[0,1,28,30,33,34,35,36,37,38,42],allow:[12,17,30,38],allow_nan:26,alongsid:[34,42],also:[37,38],although:41,amount:[35,38],amqp:[0,2,27],amqp_url:30,amqpconsum:30,ani:[12,34,35,38,42],annoy:35,anoth:[7,36,37,38,40,41],anyth:[28,38],api:[1,2],api_gateway_nam:20,apigatewai:2,appli:33,applic:[1,5,15,31,34,35,36,38],appropri:[19,38],arg:[0,3,8,11,13,17,19,20,24,28,30,33,34,38,41,42],args_for_model:3,argument:[0,23,35,36],around:38,arriv:0,ask:35,aspect:1,associ:[0,28,38],assum:[0,8,29,35,36,38,41],async:[5,6],async_field:6,asynchron:[3,6],asyncschema:3,attempt:30,attr:[8,17,41],attribut:[7,17,34,38],auth:[2,5],auth_service_nam:20,authent:[1,34,35],author:35,authorizationerror:10,authrequesthandl:[5,15],authservic:2,auto_camelcas:3,autom:[7,38],automat:[34,38,42],avail:[22,38,40],avoid:33,awesom:[34,42],awesomefield:41,awesomepackag:41,backend:[28,38],bad:35,base:[1,2,3,5,6,7,8,9,10,11,12,13,14],basemodel:[0,3,11,13,24,29,34,37,38,42],basemodeldoesnotexist:24,basi:[34,42],basic:[15,30,34,36,38,42],basic_deliv:30,basicproperti:30,becaus:[30,35,37,40],becom:35,been:[1,30,38],befor:[16,35,37,38],begin:[35,36,38],behind:35,benefit:35,best:1,better:[35,37],between:[20,34,35,36,37,38,42],bind:[30,40],bindok:30,bit:[35,36],block:[30,35,38,42],blog:38,bodi:[28,30],boilerpl:[37,41],bootstrap:40,both:[16,40],bounc:35,box:1,bring:38,browser:38,buffer:30,bug:35,build:1,bulk:36,button:38,call:[0,28,30,33,34,35,36,37,38,42],callback:[30,34,42],can:[1,12,30,34,35,36,37,38,40,42],cancel:30,cancelok:30,candid:14,cannot:[36,40],care:41,carri:30,central:20,chang:[2,9,15],change_action_statu:20,changepasswordform:16,channel:30,charfield:[11,13,34,42],check:[6,8,37,41],check_circular:26,chmod:38,circumst:38,classifi:[0,37],classmethod:[8,14,24,34,41,42],classtyp:[8,19],cleanli:30,clear:[15,38],client:[34,36,38,42],close:30,close_channel:30,close_connect:30,closur:30,cloud:[1,22,34,35,36,37,38,40,42],code:[33,35,37,38],coerc:14,collect:[34,42],column:[37,38,41],combine_action_handl:[0,28,33],combined_handl:0,come:39,command:[30,34,38,40],common:[1,37,38,42],commonli:37,commun:[30,41],compar:14,compat:41,complain:38,complet:[30,35,37,38],complex:0,complic:40,comput:38,config:2,configobject:[36,37],configur:[17,34,42],confirm:30,congratul:38,connect:[2,3],connection_service_nam:20,connectionservic:2,consist:[34,42],consol:[38,40],construct:[1,8,19,38],consul:[38,40],consum:[2,27,28],consumpt:38,contain:[37,40],context:[23,34],contrib:2,contribute_to_class:[8,19],conveni:30,convent:[0,2,8],convert:[2,12,18],convert_column_to_str:41,convert_field_to_bool:19,convert_field_to_float:19,convert_field_to_int:19,convert_field_to_pk:19,convert_field_to_str:19,convert_peewee_field:19,convet:[0,29],convini:38,cooki:15,cool:35,copi:38,core:[3,6,7,8,19,34,42],correct:[6,41],correlation_id:30,correspond:[12,35],could:36,creat:[0,2,3,14,17,21],create_connection_model:24,create_handl:[0,29],create_model_schema:[3,34,41,42],create_recip:[0,38],createhandl:[2,27,28],creation:35,creator:0,credenti:[34,36,42],crud:[0,29,37],crud_handl:[0,29,34,42],crudhandl:[2,27,28],crudnotificationcr:37,ctrl:30,current:[15,36],custom:[0,37,41],data:[0,1,3,7,8,12,16,34,35],databas:[0,1],database_url:[2,34,42],databs:12,db_field:12,db_valu:12,deal:28,declar:30,declareok:30,decor:2,deduc:[34,42],def:[0,31,34,36,38,41,42],defer:6,deffer:6,defin:[0,10,13,19,22,28,34,35,36],definit:[7,8,19],delet:[0,29,34,42],delete_handl:[0,29],delete_recip:0,deletehandl:[2,27,28],deliv:30,deliveri:30,delivery_tag:30,deregister_servic:32,describ:[0,35],descript:[35,38,41],desgin:23,design:[6,20,23,28,34],desir:33,detail:35,develop:[1,40],dict:[3,8,17,23,34,42],dictionari:[0,34,42],differ:[30,35,38],difficult:35,difficulti:35,dir:40,directli:38,directori:[23,34,35,36,37,38,42],disconnect:30,discuss:38,dispatch:[2,27],dispatch_act:28,distribut:[1,34],doc:41,docker:40,document:[38,40],doe:[30,34,35,38,41,42],doesn:38,doesnotexist:[11,13,24],don:[8,16,41],duplic:[35,38],durabl:30,each:[0,35],earlier:35,easi:[12,36],easier:35,easili:[19,35,38,40,41],editor:38,elif:0,elsewher:36,email:[13,16],emit:[34,42],empti:38,encapsult:[7,34,42],encod:26,encount:35,encrypt:12,end:35,endpoint:[2,3],engin:38,ensur:[14,16,40],ensure_ascii:26,enter:36,entir:[34,35,38,42],entiti:38,entri:[32,36,37],environ:38,equal:[12,14],establish:30,evalu:35,even:38,event:[0,3,28,37,38,42],eventu:[36,40],everi:[36,38,40],everyon:36,exact:37,exampl:[0,7,12,30,31,34,36,37,38,42],excel:41,except:[2,9],exchang:[28,30],exchange_nam:30,exchange_typ:30,execut:[6,38],execute_async_resolv:6,execution_result:6,executor:[2,3],executormiddlewar:[2,3],exist:16,expect:[37,38],expos:38,express:37,extend:[1,42],extern:[34,35,37],facebook:38,fals:[5,26,36],familiar:[37,38],far:35,favorit:38,featur:1,feel:[37,38],few:[35,38],fewer:37,field:[2,3,6],field_nam:3,fields_for_model:3,figur:[28,37],file:[13,20,35,36,37,38],filter:2,filter_model:3,find:[0,38,41],finish:[30,31,34,42],fire:[0,34,42],first:[0,30],firstnam:13,fit:1,flag:30,flask:38,flux:1,focu:1,follow:[0,29,35,36,37,38,40,41],forc:6,forgot:[2,9,15],forgotpasswordform:16,form:[2,9,15],formdata:16,found:36,frame:30,framework:[1,37],free:[37,38],from:[0,8,14,15,30,31,32,34,35,36,37,38,41,42],fulfil:38,fulli:30,func:6,functool:[8,19],fundament:38,funtion:6,futur:6,gatewai:[1,20,33,34,35,36,41,42],gener:[17,19,34,41,42],get:[0,5,7,15,31,34,35,37,38],get_base_model:[34,42],get_crud_act:20,get_current_us:15,get_login_url:15,get_model:[34,42],get_model_str:20,get_servic:32,give:[35,38],given:[0,2,6,14,15,20,23,26,28,30,32,33,34,36,37,38,42],global:[2,42],good:[32,37,42],grab:7,graphen:[3,7,8,19,35,38,41],graphene_peewe:[2,18],graphiql:[2,3,4],graphiqlrequesthandl:5,graphql:[2,3,4],graphqlrequesthandl:5,graphqlschema:[34,42],graphqltyp:3,great:37,guid:[7,38],had:36,hand:[38,40],handl:[12,15,30,34,37,42],handle_ev:30,hard:33,hash:[12,14],hash_:14,hasid:[37,38],haspassword:[2,9,11],haspassworddoesnotexist:13,have:[1,6,34,35,37,38,40,42],health:32,hello:[31,34,42],helloworld:[34,42],helper:2,here:[38,40],hidden:35,hide:36,highli:37,homebrew:40,honestli:38,hopefulli:37,host:[34,42],how:[0,1,12,38],howev:38,http:[2,5,15,27],huh:35,human:38,identifi:[15,30,36,38],illustr:[37,38],implement:[1,19,37,38,42],includ:[1,38],incom:38,increas:12,indent:26,indic:[30,34,36,38,42],info:[7,38],inform:[34,36,38,40,41,42],ingredi:[35,37],ingredientservic:[35,37],init_action_handl:34,init_app:34,init_db:[2,34,42],init_keep_al:34,initi:[2,5,16],inputrequir:16,insid:[6,35,37],instanc:[0,7,29,30,35,38],instead:[35,38],instruct:40,inted:36,intefac:[34,42],integr:6,intend:38,interact:[19,30,36,41],interfac:[34,38,42],intern:[0,14,17,34,35,37,38,41,42],interv:32,invidu:[34,42],invok:30,invol:35,ioloop:[6,30],is_async_field:6,issu:30,itself:[7,41],javascript:38,join:[35,37],json:26,jsonencod:26,just:[0,30,35,36,37,38],keep:[30,37,38],keep_al:32,kei:[14,17,24,30,32,34,38,42],keyboardinterrupt:30,kind:7,know:[12,37,40],known:[35,38],kwarg:[5,8,11,13,15,16,19,24,31,34,41,42],kwd:[3,6,7,8,12,17,19,30,34,42],langaug:38,languag:1,larg:35,lastnam:13,layer:[12,35],lead:35,learn:38,least:[37,38],leav:40,left:[12,38],length:9,less:36,let:[35,36,37,38],level:[37,38],like:[17,30,35,36,38,41],limit:[30,36],line:[37,38],link:[34,42],list:[0,2,3],listen:[34,42],littl:1,live:36,load:14,local:[34,37,42],localhost:[34,38,40,42],locat:[35,40],log:[15,16,36],logic:36,login:[2,9],login_us:15,loginform:16,loginhandl:[15,34],logout:[2,9],logout_us:15,logouthandl:[15,34],look:[1,30,35,36,38,41],lookup:7,lot:35,machin:40,macport:40,made:[30,36,37,38],mai:30,maintain:[8,34,35,36,37,38,41,42],major:35,make:[8,16,30,34,35,37,38,41,42],manag:[2,20],mani:[7,35,37,38],map:3,mark:[6,30],massiv:1,match:[0,3,16,32,34,41,42],mean:38,meant:38,member:37,messag:[1,28,30,37],meta:[7,16,35,36,38],method:[6,15,17,20,30,34,42],method_fram:30,microservic:1,middlewar:6,might:[38,41],mind:[37,38],mix:0,mixin:[2,9,11],mkdir:38,model:[0,2,3,9],model_nam:[11,13,24],model_service_nam:20,modelseri:[2,24],modelservic:2,moment:1,more:[0,1,37,38,40],most:[37,38,41],move:1,much:[37,38],must:40,mutat:[0,29,34,35,38,42],my_ev:30,myapigatewai:[34,42],myauth:[34,42],myconnect:[34,42],mymodelservic:[34,42],myrequesthandl:31,myservic:[34,42],name:[3,8,12,19,20,23,30,33,34,35,37,38,41,42],natuilu:3,natur:[34,35,37,42],nauilu:[34,42],nautilu:0,nautilus_playground:38,navig:[36,38],necess:38,necessari:[0,6,29,34,35,38],necessarili:37,need:[30,35,36,37,38,40,41],neither:37,network:[0,2,5,15],never:[37,41],new_statu:20,next:[12,35,37,38],nicest:38,non:12,none:[3,5,8,14,16,19,23,26,29,30,33,34,42],nonnul:[8,19],noop_handl:29,nor:[34,38,42],normal:[35,38],note:38,noth:[37,38],notic:[35,38],notif:37,notifi:30,now:[1,30,35,36,37,38],number:[12,34,42],numer:30,obj:[16,26,30],object:[6,7,8,11,12,13,14,16,24,26,30,34,35,36,38,41],objecttyp:[2,3,7],objecttypemeta:[8,19],objecttypeopt:[8,19],obtain:36,occur:35,off:38,on_bindok:30,on_cancelok:30,on_channel_clos:30,on_channel_open:30,on_connection_clos:30,on_connection_open:30,on_consumer_cancel:30,on_exchange_declareok:30,on_messag:30,on_queue_declareok:30,onc:[30,40],onli:[1,34,35,36,38,42],open:[30,38],open_channel:30,oper:30,opportun:[37,38],optim:35,option:[34,40,42],options_class:[8,19],order:[6,35,40,41],original_resolv:6,orm:41,other:[8,34,36,37,38,41,42],otherwis:[0,16],our:[35,36,37,38,40],out:[1,15,28,35,37],out_dir:23,output:[23,30],outsid:38,over:[6,14,28,30,42],overal:[34,41,42],overwritten:[8,41],own:[0,37,42],packag:2,pad:38,page:38,panel:37,paragraph:37,paramet:[0,3,7,12,23,28,29,30,34,38,42],paramt:[0,35],pars:38,part:[1,34,37,38,41,42],parti:37,partial:[8,19],pass:[1,6,30,34,35,42],password:[2,9,11],password_again:16,passwordfield:[11,12,13,16],passwordhash:[2,9,12],past:[37,38],patch:[19,41],pattern:[38,41],payload:[0,28,29,30,34,38],peewe:[11,12,13,19,24,41],peeweeobjecttyp:19,peeweeobjecttypemeta:19,peeweeobjecttypeopt:19,pend:[20,30],perform:[0,12,26,29,33,35],permiss:[30,38],persist:38,pika:30,ping:32,pip:40,place:[35,38],plai:37,plan:1,playground:38,pleas:40,point:[30,35,37,38,40,42],port:[34,40,42],post:[15,31,38],power:38,predict:[34,42],prefix:16,present:40,press:30,pretti:35,previou:38,previous:[37,38],primari:[24,34,38,42],primary_kei:24,primarykeyfield:[11,13,24],primit:[2,9],print:0,prior:30,problem:30,process:30,produc:1,programat:[34,42],progrium:40,prone:35,properli:38,properti:30,protect:36,protocol:30,prove:38,publish:30,purpos:[34,42],python3:38,python:[1,12,34,38,42],python_valu:12,pyutil:6,queri:[0,2,20,27],query_api:33,query_arg:7,query_graphql_servic:33,query_servic:33,query_typ:33,queue:[0,3,28,30,34,42],quickli:1,rabbitmq:[30,40],rage:1,rais:[16,30],random_str:9,rare:41,rather:[35,38],react:38,read:[38,40],readi:36,realli:37,reason:30,reaturn:[0,29],receiv:[0,29,30],recent:38,reciev:[0,29,34,38,42],recip:[0,35,36,37,38],recipeingredi:37,recipeobjecttyp:38,recipeservic:[35,36,37],reconnect:30,record:[8,34,37,38,41,42],recreat:14,redeliv:30,redirect:36,reduc:41,regardless:36,regist:[2,9],register_servic:32,registerhandl:[15,34],registeri:32,registr:[1,34,36,42],registrationform:16,registri:[2,27],regsitri:38,rehash:14,rel:23,relat:[30,34,42],relationship:[7,34,35,36,37,38,42],releas:1,reli:41,rememb:[35,36],remot:[1,7,8,35,41],remov:[0,32,34,42],renam:37,render:23,render_templ:23,reopen:30,reply_cod:30,reply_text:30,report:35,repres:[0,8,37,38,41],represent:[14,35],request:[5,15,31,34,35,36,42],request_context:5,request_handl:[34,42],requesthandl:[2,3,4],requir:[24,36],required_field:24,reset:16,resolv:[3,6,8,41],resolve_recip:38,resolve_servic:7,respond:[0,28,29,30,34],respons:[0,12,20,30,35,36],rest:[38,39],result:[6,7,33,36,38],retriev:[1,3,15,16,17,24,38],right:38,role:37,root:[20,38],root_queri:20,round:[12,14],rout:[30,31,34,42],routing_kei:[28,30],rpc:30,run:[6,30,34,35,36,37,38,40,42],run_resolve_fn:6,s3file:[2,24],safe:12,sai:[36,37],same:[36,37],save:[0,12,38],scalabl:1,schema:2,script:[2,21],second:[0,37,38],section:[35,38],secur:38,see:[7,30,35,36,37,38],seemlessli:6,selectconnect:30,self:[31,34,36,38,42],send:[30,37],sens:37,sent:[30,42],separ:[0,26,36,40],serial:[2,24],serializ:28,serivceobjecttyp:[7,35],serv:[0,37],server:[30,34,37,38,40,42],servi:35,servic:[0,1,2,7,8,13],service_location_by_nam:32,service_on:[34,42],service_two:[34,42],serviceconfig:[34,36,37,42],servicemanag:2,servicemetaclass:34,serviceobject:35,serviceobjecttyp:[2,3],serviceobjecttypemeta:8,serviceobjecttypeopt:8,session:38,set:[7,17,30,36],setup:[30,38],setup_exchang:30,setup_queu:30,should:[28,30,35,37,38,41],show:[32,41],shutdown:30,signific:[35,38],significantli:[35,37],simpl:14,simpli:[36,42],sinc:[30,35,38,40],singl:[0,3,28,33,34,35,38,41,42],singledispatch:41,singleton:34,skip:37,skipkei:26,small:[34,35],snapshot:35,socket:30,sole:[34,42],solut:[0,1],solv:35,some:[0,1,30,37,38,40,42],someth:[12,30,36,41],sometim:38,somewher:38,soon:39,sorri:37,sort:[34,35,38,42],sort_kei:26,sound:37,sourc:[0,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,23,24,26,28,29,30,31,32,33,34,41,42],span:35,spec:[1,30],special:[37,38,41],specifi:[0,8,29,36,41],split:0,sql:24,sqlalchemi:[37,38],sqlalchemy_database_uri:[36,37],sqlalchemyobjecttyp:[35,38],sqlite:[34,36,37,42],stai:1,standalon:42,standard:35,start:[7,30,34,37,38],start_consum:30,state:[0,35],statu:20,step:38,still:38,stop:[30,34,42],stop_consum:30,storag:12,store:[14,34,36,38,42],str:[3,7,30,34,42],string:[0,12,14,23,28,34,35,41,42],stringfield:16,successfulli:[34,40,42],succintli:38,sudo:38,suggest:38,summar:34,summari:[35,38,42],support:[12,19,35,38,40],surfac:30,syncdb:38,system:[34,42],tab:38,tabl:[24,37,38],tag:[6,30],take:[0,35,36,38,41],talk:[35,38],target:[7,35],target_model:[3,41],team:38,technolog:38,tediou:40,tell:[30,35],templat:23,termin:[38,40],test:[12,35,38],text:[30,37,38],than:[35,38],thank:41,thankfulli:36,thei:[0,36,40],them:[0,28,33,36],themselv:38,therefor:38,thi:[0,2,3,6,7,8,10,12,13,14,15,16,17,19,20,22,23,24,26,28,29,30,33,34,35,36,37,38,40,41,42],thing:37,think:[1,38],third:37,those:[1,36],three:35,through:[8,28,36,37,38,41],throughout:38,thrown:35,time:[1,12,37],timeout:30,timer:30,tmp:[34,36,37,40,42],todo:12,togeth:[1,30],top:[35,38],topic:30,topolog:[34,35,42],tornado:[6,31,34,42],tornadoexecutionmiddlewar:6,tornadoexecutor:6,touch:38,track:38,tradition:38,treat:38,troubl:37,true_field:[8,41],tune:1,turn:[30,33],twice:16,two:[0,35,37,38,40],type:[0,3,7,8,19,20,28,29,30,34,35,38,41,42],unboundfield:16,underli:[34,42],underneath:37,unexpect:30,unexpectedli:30,unfortun:6,unicod:30,uniqu:[30,37],unlik:35,unus:30,unused_channel:30,unused_connect:30,unused_fram:30,updat:[0,12,29],update_handl:[0,29],updatehandl:[2,27,28],upgrad:12,url:[2,15,33,34,38,42],user:[2,9,11],userdoesnotexist:13,userpassword:[2,9],userpassworddoesnotexist:11,usual:[30,36],util:[2,21],valid:[12,16,34,42],validate_password_again:16,validationerror:16,valu:[12,14,17,30,37,38],valueerror:10,varchar:12,variou:[10,19,22,28,34,35,37,38,41,42],veri:[1,35,37,38,41,42],verifi:37,version:10,via:[38,42],view:36,violat:30,visit:[38,40],visual:38,wai:[34,35,38,42],wait:[6,35],wait_for_respons:33,want:[0,30,36,37,38],web:[1,31,34,42],well:[30,34,35,38,42],went:37,were:[30,35,37],what:[1,37],when:[0,6,29,30,34,35,36,37,38,40,42],where:41,wherea:7,whether:[34,42],which:[0,8,28,30,33,34,35,36,37,38,41,42],whose:37,why:[30,38],wish:35,within:36,without:[1,34,38,42],work:[35,37,38],workflow:16,world:[34,38,42],worri:[34,42],worth:35,would:[30,37,38],wrap:[6,38],wrapper:[6,14,33,38],write:37,written:[36,38],wtform:16,yet:40,you:[0,1,30,35,36,37,38,40,41],your:[0,30,34,35,36,37],yourself:38},titles:["Action Handlers","Welcome to Nautilus!","Module Index","nautilus.api package","nautilus.api.endpoints package","nautilus.api.endpoints.requestHandlers package","nautilus.api.executor package","nautilus.api.fields package","nautilus.api.objectTypes package","nautilus.auth package","nautilus.auth.exceptions package","nautilus.auth.models package","nautilus.auth.models.fields package","nautilus.auth.models.mixins package","nautilus.auth.primitives package","nautilus.auth.requestHandlers package","nautilus.auth.requestHandlers.forms package","nautilus.config package","nautilus.contrib package","nautilus.contrib.graphene_peewee package","nautilus.conventions package","nautilus.management package","nautilus.management.scripts package","nautilus.management.util package","nautilus.models package","nautilus.models.fields package","nautilus.models.serializers package","nautilus.network package","nautilus.network.amqp package","nautilus.network.amqp.actionHandlers package","nautilus.network.amqp.consumers package","nautilus.network.http package","nautilus.network.registry package","nautilus.network.util package","nautilus.services package","Querying The Distributed Structure","Authentication","Connecting Services Together","Your First Service","Getting Started","Installation / Setup","Service API","Services","Utilities"],titleterms:{action:[0,20,30,38],actionhandl:29,amqp:[28,29,30],api:[3,4,5,6,7,8,41],apigatewai:34,appl:40,auth:[9,10,11,12,13,14,15,16],authent:36,author:36,authservic:34,background:40,base:[15,24],build:38,chang:16,combin:0,config:17,connect:[7,37],connectionservic:34,consum:30,content:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],contrib:[18,19],convent:20,convert:19,creat:22,createhandl:29,crudhandl:29,data:36,databas:2,decor:9,defin:[37,38],deletehandl:29,design:41,dispatch:28,distribut:35,endpoint:[4,5],equival:41,except:10,executor:6,executormiddlewar:6,extern:41,factori:0,field:[7,12,25,41],filter:3,first:38,forgot:16,form:16,get:39,graphene_peewe:19,graphiql:5,graphql:[5,41],handler:0,haspassword:13,helper:3,http:31,index:2,instal:40,linux:40,list:7,login:[15,16],logout:15,manag:[21,22,23],mixin:13,model:[11,12,13,20,24,25,26,37,38],modelseri:26,modelservic:34,modul:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],nautilu:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,41],necessari:40,network:[27,28,29,30,31,32,33],note:40,objecttyp:[8,19],osx:40,packag:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],particular:36,password:12,passwordhash:14,piec:36,pre:37,primit:14,process:40,provid:0,queri:[33,35,38],regist:[15,16],registri:32,requesthandl:[5,15,16,31],respond:38,s3file:25,schema:[3,20,38,41],script:22,serial:26,servic:[20,34,37,38,41,42],servicemanag:34,serviceobjecttyp:8,setup:40,start:39,state:38,structur:35,submodul:[2,3,5,6,7,8,9,11,12,13,14,15,16,17,19,20,22,24,25,26,28,29,30,31,33,34],subpackag:[2,3,4,9,11,15,18,21,24,27,28],summar:41,togeth:37,updatehandl:29,user:[13,36],userpassword:11,util:[23,24,28,33,43],welcom:1,your:38}})