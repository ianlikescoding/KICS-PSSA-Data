public class Main {
    public static void main(String[] args){
        try {
            DatabaseEngine db = new DatabaseEngine();
            db.connect_db();

            //db.insert_test(5, "Jeff", "Johnson");
            //db.update_fname_test(1, "cadeNew");

            db.release_db();

            db.close_app();
        }
        catch (Exception e){
            e.printStackTrace();
        }

    }
}