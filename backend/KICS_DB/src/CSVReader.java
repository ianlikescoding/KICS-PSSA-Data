import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class CSVReader {
    String filename;
    Scanner scanner;

    public CSVReader (String filename) throws FileNotFoundException {
        System.out.println(filename);
        scanner = new Scanner(new File(filename));
    }

    public void readExamData(){
        DatabaseEngine db = new DatabaseEngine();
        db.connect_db();
        // skip headers
        scanner.nextLine();
        while (scanner.hasNextLine()){

            String[] row = scanner.nextLine().split(",");

            // not entering AUN 189670676
            // seems to be charter schools

            // only retrieving data with school total that includes all students
            if (row[8].equals("Total") && row[7].equals("All Students")){
                // cleaning data so we are only taking full data points
                if(row.length >= 14){

                    Exam exam = new Exam(Integer.parseInt(row[2]), row[6],
                            Integer.parseInt(row[9]), Float.parseFloat(row[10]), Float.parseFloat(row[11]),
                            Float.parseFloat(row[12]), Float.parseFloat(row[13]), Integer.parseInt(row[0]));

                    exam.print_exam();
                    System.out.println();

                    //System.out.println(exam.county + " " + exam.getSchoolNumber() + " " + exam.schoolName + " " + exam.subject + " " + exam.numberScored + " ");

                    db.insert_exam(exam);

                }
            }
        }
        db.release_db();

        db.close_app();
    }

    public void readDistrictData(){
        DatabaseEngine db = new DatabaseEngine();
        db.connect_db();
        // skip headers
        scanner.nextLine();
        while (scanner.hasNextLine()){

            String[] row = scanner.nextLine().split(",");

            int AUN = Integer.parseInt(row[1]);
            String districtName = row[0];

            db.insert_district(AUN, districtName);

            // will insert only new data due to primary key constraints
        }
        db.release_db();

        db.close_app();
    }

    public void readSchoolData(){
        DatabaseEngine db = new DatabaseEngine();
        db.connect_db();

        // skip header
        scanner.nextLine();
        while (scanner.hasNextLine()){

            String[] row = scanner.nextLine().split(",");

            int schoolNumber = Integer.parseInt(row[3]);
            int AUN = Integer.parseInt(row[2]);
            String schoolName = row[1];

            db.insert_school(schoolNumber, AUN, schoolName);

            // will insert only new data due to primary key constraints
        }
        db.release_db();

        db.close_app();
    }
}
