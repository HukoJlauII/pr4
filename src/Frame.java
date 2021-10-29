import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
public class Frame extends JFrame {
    JButton b1=new JButton("AC MILAN");
    JButton b2=new JButton("Real Madrid");
    JLabel l1= new JLabel("Result: 0 X 0");
    JLabel l2= new JLabel("Last Scorer: N/A");
    JLabel l3= new JLabel("Winner: DRAW");
    Font f=new Font("Helvetica", Font.PLAIN, 16);
      Frame()
    {
        super("Match");
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(null);
        setSize(800,600);
        add(l1);
        add(l2);
        add(l3);
        l1.setSize(200,50);
        l1.setLocation(325,300);
        l2.setSize(200,50);
        l3.setSize(200,50);
        l2.setLocation(325,350);
        l3.setLocation(325,400);
        l1.setFont(f);
        l2.setFont(f);
        l3.setFont(f);
        add(b1);
        add(b2);
        b1.setSize(150,50);
        b2.setSize(150,50);
        b1.setLocation(100,200);
        b2.setLocation(550,200);

        b1.addActionListener(new ActionListener() {
            int x,y;
            @Override
            public void actionPerformed(ActionEvent ae) {
               String s1=l1.getText().substring(0,(l1.getText().indexOf('X')));
               String s2=l1.getText().substring(l1.getText().indexOf('X'));
               x=Integer.parseInt(s1.replaceAll("[^0-9]",""));
               y=Integer.parseInt(s2.replaceAll("[^0-9]",""));
               x++;
                l1.setText("Result: "+x+" X "+y);
                l2.setText("Last Scorer: AC MILAN");
                if(x>y) {
                    l3.setText("Winner: AC MILAN ");
                }else if(x==y) l3.setText("Winner: DRAW");
            }
        });
        b2.addActionListener(new ActionListener()
        {
            int x,y;
            @Override
            public void actionPerformed(ActionEvent ae)
            {
                String s1=l1.getText().substring(0,(l1.getText().indexOf('X')));
                String s2=l1.getText().substring(l1.getText().indexOf('X'));
                x=Integer.parseInt(s1.replaceAll("[^0-9]",""));
                y=Integer.parseInt(s2.replaceAll("[^0-9]",""));
                y++;
                l1.setText("Result: "+x+" X "+y);
                l2.setText("Last Scorer: Real Madrid");
                if(x<y) {
                    l3.setText("Winner: Real Madrid");
                }else if(x==y) l3.setText("Winner: DRAW");
            }
        });
        setVisible(true);
    }
    public static void main(String[]args)
    {
        new Frame();
    }
}
