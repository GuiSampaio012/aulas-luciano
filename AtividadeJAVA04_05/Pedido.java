public class Pedido{
    Restaurante restaurante = new Restaurante();
    Usuario usuario = new Usuario();

    public void fazerPedido(){
        Aplicativo aplicativo = new Aplicativo();
        System.out.println("Escolha o seu usuário");
        System.out.println(aplicativo.getListaUsuarios());

    }

    public void imprimirPedido(){

    }



}
