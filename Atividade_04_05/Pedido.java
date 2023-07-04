public class Pedido{
    Restaurante restaurante = new Restaurante();
    Usuario usuario = new Usuario();
//    EscolherUserRestaurante pedido = new EscolherUserRestaurante();
    public void fazerPedido(){
        Aplicativo aplicativo = new Aplicativo();
        System.out.println("Escolha o seu usuário");
        System.out.println(aplicativo.listaUsuarios);
    }
}
