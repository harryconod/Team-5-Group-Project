package loginuser.ApplicationUser;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
@Transactional
public interface UserAppRepository extends
        JpaRepository<ApplicationUser, Long>{
 Optional<ApplicationUser> findByEmail(String email);

 @Transactional
 @Modifying
 @Query("UPDATE AppUser a " +
         "SET a.enabled = TRUE WHERE a.email = ?1")
 int enableAppUser(String email);

}


