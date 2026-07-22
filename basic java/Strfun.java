public class Strfun {
    public static void main(String[] args) {
         String name="pavYA";
                System.out.println(name.toUpperCase());
                System.out.println(name.toLowerCase());
                System.out.println(name);
                System.out.println(name.length());
                System.out.println(name.charAt(4));
                System.out.println(name.indexOf("v"));
                System.out.println(name.equals("pavya"));
                System.out.println(name.equalsIgnoreCase("pavya"));
                System.out.println(name.substring(3));
                System.out.println(name.substring(2,4));
                System.out.println(name.concat(" venkat"));
                System.out.println(name.compareTo("although"));
                System.out.println(name.compareTo("peace"));
                System.out.println("p".hashCode());
                System.out.println("a".hashCode());
                System.out.println("e".hashCode());
                System.out.println("starts with:"+name.startsWith("Pa"));
                System.out.println("starts with:"+name.startsWith("pa"));
                System.out.println(name.replace('Y','j'));
                System.out.println("ends with:"+name.endsWith("ya"));
                System.out.println("ends with:"+name.endsWith("YA"));
                System.out.println(""+name.repeat(10));
                name="kal,vi,edu,cat,ion";
             String arr[]=name.split(",");
             System.out.println(arr[0]);
             System.out.println(arr[3]);
             System.out.println(arr.length);
             name="goat";
             System.out.println(name.matches(".at"));

    }
}

