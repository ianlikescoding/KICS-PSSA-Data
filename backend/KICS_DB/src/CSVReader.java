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

    public void readGradRateData(int year){
        DatabaseEngine db = new DatabaseEngine();
        db.connect_db();
        // skip headers
        scanner.nextLine();
        while (scanner.hasNextLine()){
            String[] row = scanner.nextLine().split(",");

            // not entering AUN 189670676
            // seems to be charter schools

            // only retrieving data with school total that includes all students
            if (!row[0].equals("") && !row[1].equals("")){

                db.insert_grad_rate(Integer.parseInt(row[0]), Float.parseFloat(row[1]), year);

            }
        }
        db.release_db();

        db.close_app();
    }

    public void readCollegeBoundData(int year){
        DatabaseEngine db = new DatabaseEngine();
        db.connect_db();
        // skip headers
        scanner.nextLine();
        while (scanner.hasNextLine()){
            String[] row = scanner.nextLine().split(",");

            // not entering AUN 189670676
            // seems to be charter schools

            // only retrieving data with school total that includes all students
            if (!row[0].equals("") && !row[1].equals("0") && !row[2].equals("0") ){

                db.insert_college_rate(Integer.parseInt(row[0]), Float.parseFloat(row[1]), Float.parseFloat(row[2]), year);

            }
        }
        db.release_db();

        db.close_app();
    }

    public void readDropoutData(int year){
        DatabaseEngine db = new DatabaseEngine();
        db.connect_db();
        // skip headers
        scanner.nextLine();
        while (scanner.hasNextLine()){
            String[] row = scanner.nextLine().split(",");

            // not entering AUN 189670676
            // seems to be charter schools

            // only retrieving data with school total that includes all students
            if (!row[0].equals("") && !row[1].equals("")){

                db.insert_dropout_rate(Integer.parseInt(row[0]), Float.parseFloat(row[1]), year);

            }
        }
        db.release_db();

        db.close_app();
    }

    public void readExpenditureData(int year){
        DatabaseEngine db = new DatabaseEngine();
        db.connect_db();
        // skip headers
        scanner.nextLine();
        while (scanner.hasNextLine()){
            String[] row = scanner.nextLine().split(",");

            // not entering AUN 189670676
            // seems to be charter schools

            // if no expenditure data
            if (row.length == 1 && row[0] != ""){
                db.insert_total_expenditures(Integer.parseInt(row[0]), 0, year);

            }
            // yes expenditure data
            else if (row.length >= 2 && row[0] != "" && row[1] != ""){

                db.insert_total_expenditures(Integer.parseInt(row[0]), Double.parseDouble(row[1]), year);

            }
        }
        db.release_db();

        db.close_app();
    }

    public void readAidRatioData(int year){
        DatabaseEngine db = new DatabaseEngine();
        db.connect_db();
        // skip headers
        scanner.nextLine();
        while (scanner.hasNextLine()){
            String[] row = scanner.nextLine().split(",");

            // not entering AUN 189670676
            // seems to be charter schools

            // if data is valid
            if (row.length == 3 && row[0] != "" && row[1] != "" && row[2] != ""){
                db.insert_aid_ratios(Integer.parseInt(row[0]), Float.parseFloat(row[1]), Float.parseFloat(row[2]), year);

            }
        }
        db.release_db();

        db.close_app();
    }

    public void readPersonnelData(int year){
        DatabaseEngine db = new DatabaseEngine();
        db.connect_db();
        // skip headers
        scanner.nextLine();
        while (scanner.hasNextLine()){
            String[] row = scanner.nextLine().split(",");

            // not entering AUN 189670676
            // seems to be charter schools

            // if data is valid
            if (row.length == 6 && row[0] != "" && row[1] != "" && row[2] != "" && row[3] != "" && row[4] != "" && row[5] != ""){
                // calculate percentages
                float aveFemales = Float.parseFloat(row[1]);
                float aveMales = Float.parseFloat(row[2]);
                float proportionFemale = aveFemales/(aveFemales+aveMales);
                float proportionMale = aveMales/(aveFemales+aveMales);

                float pFemale = proportionFemale * 100;
                float pMale = proportionMale * 100;

                db.insert_personnel(Integer.parseInt(row[0]), pFemale, pMale, Float.parseFloat(row[5]),
                        Float.parseFloat(row[3]), Float.parseFloat(row[4]), year);

            }
        }
        db.release_db();

        db.close_app();
    }

    public void readDemographicData(){
        DatabaseEngine db = new DatabaseEngine();
        db.connect_db();
        // skip headers
        scanner.nextLine();
        while (scanner.hasNextLine()){
            String[] row = scanner.nextLine().split(",");

            // not entering AUN 189670676
            // seems to be charter schools

            int schoolNumber = Integer.parseInt(row[3]);
            float value;
            String demographic = row[4];
            String paramDemographic;

            // large conditional checking demographic of data we want

            if(demographic.equals("2 or More Races")){
                // change paramDemographic to match mySQL
                paramDemographic = "TwoOrMoreRaces";
                value = Float.parseFloat(row[5]);
                db.insert_demographic_data(paramDemographic, schoolNumber, value);
            } else if (demographic.equals("American Indian/Alaskan Native ")){
                // change paramDemographic to match mySQL
                paramDemographic = "NativeAmerican";
                value = Float.parseFloat(row[5]);
                db.insert_demographic_data(paramDemographic, schoolNumber, value);
            } else if (demographic.equals("Asian ")){
                // change paramDemographic to match mySQL
                paramDemographic = "Asian";
                value = Float.parseFloat(row[5]);
                db.insert_demographic_data(paramDemographic, schoolNumber, value);
            } else if (demographic.equals("Black/African American ")){
                // change paramDemographic to match mySQL
                paramDemographic = "AfricanAmerican";
                value = Float.parseFloat(row[5]);
                db.insert_demographic_data(paramDemographic, schoolNumber, value);
            } else if (demographic.equals("Economically Disadvantaged")){
                // change paramDemographic to match mySQL
                paramDemographic = "EconDisadvantage";
                value = Float.parseFloat(row[5]);
                db.insert_demographic_data(paramDemographic, schoolNumber, value);
            } else if (demographic.equals("Hispanic ")){
                // change paramDemographic to match mySQL
                paramDemographic = "Hispanic";
                value = Float.parseFloat(row[5]);
                db.insert_demographic_data(paramDemographic, schoolNumber, value);
            } else if (demographic.equals("Homeless")){
                // change paramDemographic to match mySQL
                paramDemographic = "Homeless";
                value = Float.parseFloat(row[5]);
                db.insert_demographic_data(paramDemographic, schoolNumber, value);
            } else if (demographic.equals("White ")){
                // change paramDemographic to match mySQL
                paramDemographic = "White";
                value = Float.parseFloat(row[5]);
                db.insert_demographic_data(paramDemographic, schoolNumber, value);
            } else if (demographic.equals("Female (School)")){
                // change paramDemographic to match mySQL
                paramDemographic = "Female";
                value = Float.parseFloat(row[5]);
                db.insert_demographic_data(paramDemographic, schoolNumber, value);
            } else if (demographic.equals("Male (School)")){
                // change paramDemographic to match mySQL
                paramDemographic = "Male";
                value = Float.parseFloat(row[5]);
                db.insert_demographic_data(paramDemographic, schoolNumber, value);
            }
        }
        db.release_db();

        db.close_app();
    }
}
