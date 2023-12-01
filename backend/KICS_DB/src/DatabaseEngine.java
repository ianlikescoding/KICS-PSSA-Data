import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;
import com.mysql.jdbc.PreparedStatement;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.time.Year;
import java.util.ArrayList;

public class DatabaseEngine {
    static int lport;
    static String rhost;
    static int rport;

    // connection to database variable
    Connection con;

    // base sql statement
    Statement st;

    // connection
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

    public void insert_exam(Exam exam){
        try {
            String sql = "insert into PSSAScores " +
                    "values (" + exam.schoolNumber + ", '" + exam.subject + "', " + exam.numberScored + ", " + exam.pAdvanced
                    + ", " + exam.pProficient + ", " + exam.pBasic + ", " + exam.pBelowBasic + ", " + exam.year
                    + ");";
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

    public void insert_district(int AUN, String districtName){
        try {
            String sql = "insert into District " +
                    "values (" + AUN + ", '" + districtName + "'"
                    + ");";
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

    public void insert_school(int schoolNumber, int AUN, String schoolName){
        try {
            String sql = "insert into School " +
                    "values (" + schoolNumber + ", " + AUN + ", '" + schoolName + "'"
                    + ");";
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

    public void insert_grad_rate(int schoolNumber, float pGrad, int year){
        try {
            String sql = "insert into Graduation " +
                    "values (" + schoolNumber + ", " + year + ", " + "NULL, "
                    + "NULL, " + pGrad + ", " + "NULL"
                    + ");";
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

    public void insert_college_rate(int schoolNumber, float pCollegeBound, float pPostSecondary, int year){
        try {
            String sql = "update Graduation " +
                    "set PCollegeBound = " + pCollegeBound + ", PPostSecondary = " + pPostSecondary
                    + " where SchoolNumber = " + schoolNumber + " AND Year = " + year
                    + ";";
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

    public void insert_dropout_rate(int schoolNumber, float dropoutRate, int year){
        try {
            String sql = "update Graduation " +
                    "set DropoutRate = " + dropoutRate
                    + " where SchoolNumber = " + schoolNumber + " AND Year = " + year
                    + ";";
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

    public void insert_total_expenditures(int AUN, double expenditures, int year){
        try {
            if (expenditures != 0){
                String sql = "insert into Finances " +
                        "values (" + year + ", " + AUN + ", " + expenditures
                        + ", NULL, " + "NULL"
                        + ");";
                int update = st.executeUpdate(sql);

                if(update >= 1){
                    System.out.println("Inserted data");
                }
                else{
                    System.out.println("Failed to insert data");
                }
            }
            else {
                String sql = "insert into Finances " +
                        "values (" + year + ", " + AUN + ", NULL"
                        + ", NULL, " + "NULL"
                        + ");";
                int update = st.executeUpdate(sql);

                if(update >= 1){
                    System.out.println("Inserted data");
                }
                else{
                    System.out.println("Failed to insert data");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void insert_aid_ratios(int AUN, float personalIncome, float WADM, int year){
        try {
            String sql = "update Finances " +
                    "set PersonalIncome = " + personalIncome + ", WADM = " + WADM
                    + " where AUN = " + AUN + " AND Year = " + year
                    + ";";
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

    public void insert_personnel(int AUN, float PFemale, float PMale, float EdLevel, float Salary, float YearsOfService, int year){
        try {
            String sql = "insert into PersonnelData " +
                    "values (" + AUN + ", " + year + ", " + EdLevel + ", "
                    + Salary + ", " + PFemale + ", " + PMale + ", " + YearsOfService
                    + ");";
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

    public void insert_demographic_data(String demographic, int schoolNumber, float value){
        try {
            String sql = "update Demographics " +
                    "set " + demographic + "= " + value
                    + " where SchoolNumber = " + schoolNumber
                    + ";";
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

    public ArrayList<Exam> select_star_exam(){
        ArrayList<Exam> exams = new ArrayList<Exam>();
        try {

            String sql = "select * from Exam;";

            ResultSet rs = st.executeQuery(sql);

            while(rs.next()){
                int schoolID = rs.getInt("School_ID");
                String subject = rs.getString("Subject");
                int numberScored = rs.getInt("Number_Scored");
                float pAdvanced = rs.getFloat("P_Advanced");
                float pProficient = rs.getFloat("P_Proficient");
                float pBasic = rs.getFloat("P_Basic");
                float pBelowBasic = rs.getFloat("P_Below_Basic");
                int year =  rs.getInt("year");

                Exam exam = new Exam(schoolID, subject, numberScored, pAdvanced, pProficient, pBasic, pBelowBasic, year);


                exams.add(exam);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return exams;
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
}
