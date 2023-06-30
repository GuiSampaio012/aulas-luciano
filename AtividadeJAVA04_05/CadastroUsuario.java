import javax.swing.*;
import java.awt.*;

public class CadastroUsuario extends JFrame {
//    Aplicativo aplicativo = new Aplicativo();
    public JTextField campoNome;
    public JTextField campoCpf;
    public JTextField campoEndereco;
    public JButton botaoCadastrar;
    public CadastroUsuario() {
        setTitle("Cadastro de usuários");
        setBounds(200, 100, 500, 500);
        setLayout(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setResizable(false);


        campoNome = new JTextField(20);
        campoNome.setBounds(100, 0, 300, 50);


        campoCpf = new JTextField(14);
        campoCpf.setBounds(100, 100, 300, 50);


        campoEndereco = new JTextField(14);
        campoEndereco.setBounds(100, 200, 260, 50);


        botaoCadastrar = new JButton("Cadastrar");
        botaoCadastrar.setBounds(100, 300, 100, 100);
        botaoCadastrar.setBackground(Color.GRAY);

        JButton botaoVoltar = new JButton("Voltar");
        botaoVoltar.setBounds(210, 300, 100, 80);
        botaoVoltar.setBackground(Color.GRAY);

        botaoVoltar.addActionListener(e -> this.dispose());

        //botaoCadastrar.setOpaque(false);
        //botaoCadastrar.setContentAreaFilled(false);
        //botaoCadastrar.setBorderPainted(false);


//        ImageIcon imagem = new ImageIcon("src/imagens/cadastrar_usuario.png");
//        Image imagemRedimensionada = imagem.getImage().getScaledInstance(800, 550, Image.SCALE_DEFAULT);
//        ImageIcon imagemFinal = new ImageIcon(imagemRedimensionada);
//        JLabel labelImagem = new JLabel(imagemFinal);
//        labelImagem.setBounds(0,  0, 800, 500);
//        getContentPane().add(labelImagem);
//
//        labelImagem.setVisible(true);

        getContentPane().add(campoCpf);
        getContentPane().add(campoNome);
        getContentPane().add(campoEndereco);
        getContentPane().add(botaoCadastrar);
        getContentPane().add(botaoVoltar);
        System.out.println();
    }

}
