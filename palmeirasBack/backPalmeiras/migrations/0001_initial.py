# Generated by Django 4.1.7 on 2023-03-30 19:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categorias',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=50, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Clientes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('data_nascimento', models.DateField()),
                ('cpf', models.CharField(max_length=14)),
                ('data_cadastro', models.DateField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Endereco',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('logradouro', models.CharField(max_length=255)),
                ('numero', models.CharField(max_length=10)),
                ('bairro', models.CharField(max_length=50)),
                ('complemento', models.CharField(max_length=50)),
                ('cidade', models.CharField(max_length=50)),
                ('uf', models.CharField(max_length=2)),
                ('cep', models.CharField(max_length=8)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backPalmeiras.clientes')),
            ],
        ),
        migrations.CreateModel(
            name='Pedidos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('metodo', models.CharField(choices=[('B', 'Boleto'), ('C', 'Cartão'), ('P', 'PIX')], default='P', max_length=1)),
                ('data_pedido', models.DateField(auto_now=True)),
                ('preco_total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('status_pagamento', models.CharField(choices=[('P', 'Pendente'), ('A', 'Aprovado'), ('N', 'Negado')], default='P', max_length=1)),
                ('status_pedido', models.CharField(choices=[('C', 'Cancelado'), ('E', 'Entregue'), ('P', 'Preparando'), ('A', 'Aguardando'), ('T', 'Transportando')], default='P', max_length=1)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='backPalmeiras.clientes')),
                ('endereco', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='backPalmeiras.endereco')),
            ],
        ),
        migrations.CreateModel(
            name='Produtos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('descricao', models.TextField()),
                ('preco', models.DecimalField(decimal_places=2, max_digits=6)),
                ('qtd_estoque', models.PositiveIntegerField()),
                ('disponibilidade', models.BooleanField(default=True)),
                ('foto', models.ImageField(upload_to='produtos')),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backPalmeiras.categorias')),
            ],
        ),
        migrations.CreateModel(
            name='PedidosItens',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantidade', models.PositiveIntegerField()),
                ('preco', models.DecimalField(decimal_places=2, max_digits=6)),
                ('pedido', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backPalmeiras.pedidos')),
                ('produto', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='backPalmeiras.produtos')),
            ],
        ),
    ]
