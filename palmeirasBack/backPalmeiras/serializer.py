from rest_framework import serializers
from .models import * 

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = ['id', 'nome']
    
    
class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produtos
        fields = ['id', 'nome', 'descricao', 'preco', 'qtd_estoque', 'foto', 'categoria']
    # categoria = CategoriaSerializer()   
        
class ClientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clientes
        fields = ['id', 'nome', 'email', "data_nascimento", 'cpf', 'data_cadastro']
        
        
class EnderecosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = ['id', 'logradouro', 'numero', 'cliente']
        
        
class PedidosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedidos
        fields = ['id', 'metodo', 'data_pedido', 'preco_total']
        
        
class PedidosItensSerializer(serializers.ModelSerializer):
    class Meta:
        model = PedidosItens
        fields = ['id', 'produto', 'quantidade', 'preco_total', 'pedido']                                   