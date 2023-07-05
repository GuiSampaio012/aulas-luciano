import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class CadastrarRestaurante extends JFrame {

    public JTextField campoNome;
    public JTextField campoCnpj;
    public JTextField campoEndereco;
    public JButton botaoCadastrar;
    public CadastrarRestaurante() {
        setTitle("Cadastro de restaurantes");
        setBounds(200, 100, 500, 500);
        setLayout(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setResizable(false);


        Font fonte = new Font("Arial", Font.BOLD, 24);


        campoNome = new JTextField();
        campoNome.setBounds(213, 190, 257, 43);
        campoNome.setBackground(new Color(52, 89, 68));
        campoNome.setBorder(BorderFactory.createMatteBorder(0, 0, 0, 0, Color.BLACK));
        campoNome.setForeground(Color.GREEN);
        campoNome.setFont(fonte);

        campoEndereco = new JTextField();
        campoEndereco.setBounds(213, 261, 257, 43);
        campoEndereco.setBackground(new Color(52, 89, 68));
        campoEndereco.setBorder(BorderFactory.createMatteBorder(0, 0, 0, 0, Color.BLACK));
        campoEndereco.setForeground(Color.GREEN);
        campoEndereco.setFont(fonte);

        campoCnpj = new JTextField();
        campoCnpj.setBounds(266, 333, 205, 43);
        campoCnpj.setBackground(new Color(52, 89, 68));
        campoCnpj.setBorder(BorderFactory.createMatteBorder(0, 0, 0, 0, Color.BLACK));
        campoCnpj.setForeground(Color.GREEN);
        campoCnpj.setFont(fonte);

        botaoCadastrar = new JButton("Cadastrar");
        botaoCadastrar.setBounds(267, 400, 215, 52);
        botaoCadastrar.setBackground(Color.BLACK);

        botaoCadastrar.setOpaque(false);
        botaoCadastrar.setContentAreaFilled(false);
        botaoCadastrar.setBorderPainted(false);

        JButton botaoVoltar = new JButton("Voltar");
        botaoVoltar.setBounds(35, 400, 215, 52);
        botaoVoltar.setBackground(Color.GRAY);


        botaoVoltar.setOpaque(false);
        botaoVoltar.setContentAreaFilled(false);
        botaoVoltar.setBorderPainted(false);
        botaoVoltar.addActionListener(e -> this.dispose());


        ImageIcon imagem = new ImageIcon("telas_restaurante/cadastrar_restaurante.png");
        Image imagemRedimensionada = imagem.getImage().getScaledInstance(500, 490, Image.SCALE_DEFAULT);
        ImageIcon imagemFinal = new ImageIcon(imagemRedimensionada);
        JLabel labelImagem = new JLabel(imagemFinal);
        labelImagem.setBounds(0,  -20, 500, 500);
        getContentPane().add(labelImagem);


//        botaoVoltar.addActionListener(new ActionListener() {
//            public void actionPerformed(ActionEvent e) {
//                Boolean b = false;
//                this.setVisible(false);
////                System.exit(0);
//
//            }
//        });


        getContentPane().add(campoNome);
        getContentPane().add(campoEndereco);
        getContentPane().add(campoCnpj);
        getContentPane().add(botaoCadastrar);
        getContentPane().add(botaoVoltar);
        labelImagem.setVisible(true);
    }

}
