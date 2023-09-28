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
        while (scanner.hasNextLine()){

            /*
            Scanner lineScanner = new Scanner(scanner.nextLine());
            lineScanner.useDelimiter(",");
            while (lineScanner.hasNext()){

            }
             */

            String[] row = scanner.nextLine().split(",");
            /*
            for(int i = 0; i < row.length; i++){
                System.out.print(row[i] + ", ");
            }

             */
            //System.out.println(row[8]);

            // only retrieving data with school total that includes all students
            if (row[8].equals("School Total") && row[7].equals("All Students")){
                // cleaning data so we are only taking full data points
                if(row.length >= 14){
                    Exam exam = new Exam(Integer.parseInt(row[1]), Integer.parseInt(row[2]), row[3], row[4], row[5], row[6],
                            Integer.parseInt(row[9]), Float.parseFloat(row[10]), Float.parseFloat(row[11]),
                            Float.parseFloat(row[12]), Float.parseFloat(row[13]));

                    //System.out.println(exam.getSchoolNumber() + " " + exam.numberScored);

                    db.insert_exam(exam);
                }
            }
        }
        db.release_db();

        db.close_app();
    }

}
