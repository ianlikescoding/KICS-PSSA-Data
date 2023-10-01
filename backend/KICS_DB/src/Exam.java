public class Exam {
    int AUN;
    int schoolNumber;
    String county;
    String districtName;
    String schoolName;
    String subject;
    int numberScored;
    float pAdvanced;
    float pProficient;
    float pBasic;
    float pBelowBasic;

    // custom constructor to load in values
    public Exam(int AUN, int schoolNumber, String county, String districtName, String schoolName,
                String subject, int numberScored, float pAdvanced, float pProficient, float pBasic, float pBelowBasic)
    {
        this.AUN = AUN;
        this.schoolNumber = schoolNumber;
        this.county = county;
        this.districtName = districtName;
        this.schoolName = schoolName;
        this.subject = subject;
        this.numberScored = numberScored;
        this.pAdvanced = pAdvanced;
        this.pProficient = pProficient;
        this.pBasic = pBasic;
        this.pBelowBasic = pBelowBasic;
    }

    void print_exam(){
        System.out.print(AUN + " " + schoolNumber + " " + county + " " + districtName + " " + schoolName
        + " " + subject + " " + numberScored + " " + pAdvanced + " " + pProficient + " " + pBasic + " "
        + pBelowBasic);
    }

    int getAUN(){
        return AUN;
    }
    int getSchoolNumber(){
        return schoolNumber;
    }
    String getCounty(){
        return county;
    }
}
