from rest_framework import serializers
from .models import Clientes, Endereco, Contas, Transferencias
from djoser.serializers import UserCreateSerializer
from djoser.serializers import UserCreateSerializer as BaseUserRegistrationSerializer

# class UserRegistrationSerializer(BaseUserRegistrationSerializer):
#     class Meta(BaseUserRegistrationSerializer.Meta):
#         fields = ('city', 'state', 'email', 'name', 'last_name', 'account_address', 'password', )

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clientes
        fields = ['id', 'nome', 'email', 'cpf', 'foto_logo','data_nascimento','celular', 'tipo_cliente']

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = ['id','clienteEndereco', 'rua', 'bairro', 'cidade', 'estado']        
        
class ContasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contas
        fields = ['id','clienteConta', 'data_abertura', 'ativa', 'senha','limite','saldo', 'numero', 'agencia']
        read_only_fields = ['numero', 'agencia']

class TransferenciasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transferencias
        fields = ['id','valorEnviado', 'contaTransferencia', 'tipo', 'data_hora']

