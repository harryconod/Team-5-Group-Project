package loginuser.ApplicationUser;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import registration.token.ConfirmationToken;
import registration.token.TokenConfirmationService;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@AllArgsConstructor
public class UserAppService implements UserDetailsService {
private final static String USER_NOT_FOUND = " User with email %s has not been found.";
    private final UserAppRepository userAppRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final TokenConfirmationService tokenConfirmationService;

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        return userAppRepository.findByEmail(email)
                .orElseThrow(()-> new UsernameNotFoundException
                        (String.format(USER_NOT_FOUND, email)));
    }
    public String signUpUser(ApplicationUser applicationUser) {
     boolean appUserExists = userAppRepository.findByEmail(applicationUser.getEmail())
                .isPresent();
     if (appUserExists) {
         throw new IllegalStateException("Sorry, this email is already in use.");
     }
     String encodedPassword = bCryptPasswordEncoder.encode(applicationUser.getPassword());
     applicationUser.setPassword(encodedPassword);

     userAppRepository.save(applicationUser);
        String token = UUID.randomUUID().toString();
        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                applicationUser
        );
        tokenConfirmationService.saveConfirmationToken(
                confirmationToken);
        return token;
    }

    public void enableApplicationUser(String email) {
    }
}