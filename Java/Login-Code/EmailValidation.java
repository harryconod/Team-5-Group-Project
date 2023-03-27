package registration;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.function.Predicate;
@Service
public class EmailValidation implements Predicate <String> {
    @Override
    public boolean test(String s) {
        // this is to validate the email address for when someone logs in
        return true;
    }
}
