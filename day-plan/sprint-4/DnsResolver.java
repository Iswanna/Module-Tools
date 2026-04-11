 import java.util.Arrays;

class DnsResolver {
    public static void main(String[] args) {
        if (args.length != 1) {
            System.err.printf("Expected exactly one argument, but got %d%n", args.length);
            System.exit(1);
        }

        System.out.println(Arrays.toString(args));
        String host = args[0];

        System.out.println(host);

        String[] parts = host.split("\\."); // you can also use "[.]"
        System.out.println(Arrays.toString(parts));
        System.out.printf("The top-level domain of the host %s is %s%n", host, parts[parts.length - 1]);
    }
}