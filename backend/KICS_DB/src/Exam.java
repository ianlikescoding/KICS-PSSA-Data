public class Exam {
    int schoolNumber;
    String subject;
    int numberScored;
    float pAdvanced;
    float pProficient;
    float pBasic;
    float pBelowBasic;
    int year;

    // custom constructor to load in values
    public Exam(int schoolNumber, String subject, int numberScored, float pAdvanced, float pProficient,
                float pBasic, float pBelowBasic, int year)
    {
        this.schoolNumber = schoolNumber;
        this.subject = subject;
        this.numberScored = numberScored;
        this.pAdvanced = pAdvanced;
        this.pProficient = pProficient;
        this.pBasic = pBasic;
        this.pBelowBasic = pBelowBasic;
        this.year = year;
    }

    void print_exam(){
        System.out.print(schoolNumber + " " + subject + " " + numberScored + " " + pAdvanced + " " + pProficient + " " + pBasic + " "  + pBelowBasic + " " + year);
    }

    int getSchoolNumber(){
        return schoolNumber;
    }
}
