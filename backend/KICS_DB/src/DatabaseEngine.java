import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class DatabaseEngine {
    static int lport;
    static String rhost;
    static int rport;

    // connection to database variable
    Connection con;

    // base sql statement
    Statement st;

    JSch jsch;

    Session session;
    /*
    Constructor makes connection to ssh through JSch(),
    to connect to database, use later method
     */
    public DatabaseEngine() {

        String user = "KICS";
        String password = "butterbread";
        String host = "139.147.9.167";
        int port = 22;
        try {
            jsch = new JSch();
            session = jsch.getSession(user, host, port);

            lport = 4321;
            rhost = "localhost";
            rport = 3306;
            session.setPassword(password);
            session.setConfig("StrictHostKeyChecking", "no");
            System.out.println("Establishing Connection...");
            session.connect();
            int assinged_port=session.setPortForwardingL(lport, rhost, rport);
            System.out.println("localhost:"+assinged_port+" -> "+rhost+":"+rport);

        } catch (Exception e) {
            System.err.print(e);
        }

        // no connection yet
        con = null;
    }

    public void connect_db(){
        // setting up connection
        String driver = "com.mysql.jdbc.Driver";
        // ssh url
        String url = "jdbc:mysql://" + rhost +":" + lport + "/";

        String db = "kics";
        String dbUser = "kics";
        String dbPasswd = "KICS320;";

        // connecting to database through ssh
        try {
            Class.forName(driver);
            con = DriverManager.getConnection(url + db, dbUser, dbPasswd);

            // creates base statement
            st = con.createStatement();
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }

    public void release_db(){
        try {
            if (st != null) { st.close(); }
        }
        catch (Exception e) {
            System.out.println(e);
        }
        try {
            if (con != null) { con.close(); }
        }
        catch (Exception e) {
            System.out.println(e);
        }
    }

    public void close_app(){
        try {
            session.disconnect();
        }
        catch (Exception e) {
            System.out.println(e);
        }
    }
    public void insert_test(int id, String fname, String lname){
        try {
            String sql = "insert into test " +
                    "values (" + id + ", " + "'" + fname + "'" + ", " + "'" + lname + "');";
            int update = st.executeUpdate(sql);

            if(update >= 1){
                System.out.println("Inserted data");
            }
            else{
                System.out.println("Failed to insert data");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void update_fname_test(int id, String newfname){
        try {
            String sql = "UPDATE test " +
                    "SET fname = '" + newfname + "' WHERE idtest = " + id + ";";

            int update = st.executeUpdate(sql);
            if(update >= 1){
                System.out.println("Works");
            }
            else {
                System.out.println("Does not work");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
