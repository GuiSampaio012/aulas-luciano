import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.Vector;

public class teste {
    public static void main(String[] args) {
        JFrame telateste = new JFrame();
        telateste.setTitle("Home");
        telateste.setBounds(200, 100, 500, 500);
        telateste.setLayout(null);
        telateste.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        telateste.setResizable(false);
        telateste.setVisible(true);

        ArrayList<String> listas = new ArrayList<String>();
        listas.add("Sumarezinho");
        JComboBox<String> campoNome = new JComboBox<String>(new Vector<>(listas));
        campoNome.setBounds(213, 190, 257, 43);
        campoNome.setBackground(new Color(52, 89, 68));
        campoNome.setBorder(BorderFactory.createMatteBorder(0, 0, 0, 0, Color.BLACK));
        campoNome.setForeground(Color.GREEN);
        telateste.add(campoNome);

    }
}
