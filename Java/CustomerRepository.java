package com.example.demo.applicationUser;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
@Transactional(readOnly = true)
public interface CustomerRepository {
 Optional<applicationUser> findByEmail(String email);


}


