import java.util.ArrayList;

public class Main {
    public static void main(String[] args){
        try {


            //DatabaseEngine db = new DatabaseEngine();
            //db.connect_db();

            //CSVReader csv = new CSVReader("2019_PSSA.csv");
            //csv.readExamData();

            //CSVReader csv = new CSVReader("SchoolFastFacts_2019.csv");
            //csv.readSchoolData();

            CSVReader csv = new CSVReader("2018_PSSA.csv");
            csv.readExamData();

            //db.insert_exam(5, "Jeff", "Johnson");
            //db.update_fname_test(1, "cadeNew");

            /*
            ArrayList<Exam> exams = db.select_star_exam();

            for (int i = 0; i < exams.size(); i++){
                exams.get(i).print_exam();
                System.out.println();
            }
             */

            //db.release_db();

            //db.close_app();

        }
        catch (Exception e){
            e.printStackTrace();
        }

    }
}