from django.db import models
from django.contrib import admin
from django.core.validators import MinValueValidator,MaxValueValidator

# Create your models here.
class Clientes(models.Model):
    CLIENTE_FREE = 'F'
    CLIENTE_PREMIUM = 'P'
    CLIENTE_MASTER = 'M'
    CLIENTE_CHOICES = (
        (CLIENTE_FREE,'Free'),
        (CLIENTE_PREMIUM, 'Premium'),
        (CLIENTE_MASTER,'Master')
    )
    
    #conservar o 'ativa'
    nome = models.CharField(max_length=100)
    email = models.EmailField(max_length=50, unique= True)
    cpf = models.CharField(max_length=20)
    foto_logo = models.CharField(max_length=100, default="teste")
    data_nascimento = models.DateField()
    celular = models.CharField(max_length=10)
    tipo_cliente = models.CharField(max_length=1, choices=CLIENTE_CHOICES, default=CLIENTE_FREE)
    
    def __str__(self) -> str:
        return self.nome
    
    class Meta:
        verbose_name_plural = "Clientes"

class Endereco(models.Model):
    clienteEndereco = models.ForeignKey(Clientes, on_delete=models.PROTECT)
    rua = models.CharField(max_length=40)
    bairro = models.CharField(max_length=50)
    cidade = models.CharField(max_length=30)
    estado = models.CharField(max_length=30)
        
class Contas(models.Model):
    
    ATIVA = 'A'
    DESATIVADA = 'D'
    ATIVA_CHOICES = (
        (ATIVA,'Ativa'),
        (DESATIVADA, 'Desativada')
    )

    clienteConta = models.ForeignKey(Clientes, on_delete= models.PROTECT)
    data_abertura = models.DateField(auto_now=True)
    agencia = models.IntegerField()
    numero = models.CharField(max_length=6, unique=True)
    ativa = models.CharField(max_length=1, choices=ATIVA_CHOICES, default=ATIVA)
    senha = models.CharField(max_length=4)
    limite = models.IntegerField()
    # preco = models.DecimalField(validators=[MinValueValidator(1,message='O preço deve ser igual ou maior que 1 real'),MaxValueValidator(1000)], max_digits=6, decimal_places=2)
    saldo = models.IntegerField()
    
    
    def __str__(self) -> str:
        return self.numero
    
    class Meta: 
        verbose_name_plural = "Contas"
        
class Transferencias(models.Model):
    
    DEPOSITO = 'D'
    TRANFERENCIA = 'T'
    PIX = 'P'
    TIPOS_CHOICES = (
        (DEPOSITO,'Deposito'),
        (TRANFERENCIA, 'Transferencia'),
        (PIX,'Pix')
    )
    valor_enviado = models.IntegerField(0)
    contaTransferencia = models.ForeignKey(Contas, on_delete= models.PROTECT)
    tipo = models.CharField(max_length=1, choices=TIPOS_CHOICES, default=TRANFERENCIA)
    data_hora = models.DateField(auto_now=True)
    
    def __str__(self) -> str:
        return self.valor_enviado
    
    class Meta:
        verbose_name_plural = "Transferencias" 
        

               
            