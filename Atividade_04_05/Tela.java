import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Tela extends JFrame {
    private JButton botaoCadastrarRestaurante;
    private JButton botaoFazerPedido;
    private JButton botaoCadastrarUsuario;

    public JButton getBotaoCadastrarRestaurante() {
        return botaoCadastrarRestaurante;
    }

    public void setBotaoCadastrarRestaurante(JButton botaoCadastrarRestaurante) {
        this.botaoCadastrarRestaurante = botaoCadastrarRestaurante;
    }

    public JButton getBotaoFazerPedido() {
        return botaoFazerPedido;
    }

    public void setBotaoFazerPedido(JButton botaoFazerPedido) {
        this.botaoFazerPedido = botaoFazerPedido;
    }

    public JButton getBotaoCadastrarUsuario() {
        return botaoCadastrarUsuario;
    }

    public void setBotaoCadastrarUsuario(JButton botaoCadastrarUsuario) {
        this.botaoCadastrarUsuario = botaoCadastrarUsuario;
    }

    public Tela() {
        setTitle("Home");
        setBounds(200, 100, 500, 500);
        setLayout(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setResizable(false);

        botaoFazerPedido = new JButton("Faça um pedido!");
        botaoFazerPedido.setSize(250,50);
        botaoFazerPedido.setLocation(100,100);
        botaoFazerPedido.setOpaque(false);
        botaoFazerPedido.setContentAreaFilled(false);
        botaoFazerPedido.setBorderPainted(false);

        botaoCadastrarRestaurante = new JButton("Cadastre um restaurante!");
        botaoCadastrarRestaurante.setSize(250,50);
        botaoCadastrarRestaurante.setLocation(100,200);
        botaoCadastrarRestaurante.setOpaque(false);
        botaoCadastrarRestaurante.setContentAreaFilled(false);
        botaoCadastrarRestaurante.setBorderPainted(false);

        botaoCadastrarUsuario = new JButton("Cadastre um usuário!");
        botaoCadastrarUsuario.setSize(250,50);
        botaoCadastrarUsuario.setLocation(100,300);
        botaoCadastrarUsuario.setOpaque(false);
        botaoCadastrarUsuario.setContentAreaFilled(false);
        botaoCadastrarUsuario.setBorderPainted(false);



//        ImageIcon imagem = new ImageIcon("src/imagens/tela_inicial.png");
//        Image imagemRedimensionada = imagem.getImage().getScaledInstance(800, 550, Image.SCALE_DEFAULT);
//        ImageIcon imagemFinal = new ImageIcon(imagemRedimensionada);
//        JLabel labelImagem = new JLabel(imagemFinal);
//        labelImagem.setBounds(0,  0, 800, 500);
//        getContentPane().add(labelImagem);

        getContentPane().add(botaoCadastrarRestaurante);
        getContentPane().add(botaoFazerPedido);
        getContentPane().add(botaoCadastrarUsuario);

//        labelImagem.setVisible(true);
    }
}
