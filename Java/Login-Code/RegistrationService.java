package registration;

import com.example.security.email.EmailSender;
import jakarta.transaction.Transactional;
import loginuser.ApplicationUser.ApplicationUser;
import loginuser.ApplicationUser.ApplicationUserRole;
import loginuser.ApplicationUser.UserAppService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import registration.token.ConfirmationToken;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor

public class RegistrationService {
    private final UserAppService userAppService;
    private final EmailValidation emailValidation;
    private final TokenConfirmationService tokenConfirmationService;
    private final EmailSender emailSender;



    public String register(RegistrationRequest request) {
        boolean isValidEmail =emailValidation.
                test(request.getEmail());
        if(!isValidEmail) {
            throw new IllegalStateException("email not recognised");
        }
        String token = userAppService.signUpUser(
                new ApplicationUser(
                        request.getFirstname(),
                        request.getLastname(),
                        request.getEmail(),
                        request.getPassword(),
                        ApplicationUserRole.USER
                )
        );
        String link = "http://localhost:8080/api/v1/registration/confirm?token=" + token;
        emailSender.send(request.getEmail(), buildEmail(request.getFirstname(), link) );
        return token;
    }

    private String buildEmail(String firstname, String link) {
        return firstname;
    }

    @Transactional


    public String confirmToken (String token) {
        ConfirmationToken confirmationToken = (ConfirmationToken) tokenConfirmationService
                .getToken(token)
                .orElseThrow(() ->
                        new IllegalStateException("token not found"));
        if (confirmationToken.getConfirmedAt() !=null){
            throw new IllegalStateException("email has already been confirmed");
        }
        LocalDateTime expiredAt = confirmationToken.getExpiresAt();
        if (expiredAt.isBefore(LocalDateTime.now())){
            throw new IllegalStateException("token expired");

        }
        tokenConfirmationService.setConfirmedAt(token);
        userAppService.enableApplicationUser(
                confirmationToken.getApplicationUser().getEmail());
        String confirmed = "confirmed";
        return confirmed;


    }
        }




