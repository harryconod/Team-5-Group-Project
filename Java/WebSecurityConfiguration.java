package com.example.security.configuration;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.WebSecurityConfigurer;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@AllArgsConstructor
@EnableWebSecurity

public class WebSecurityConfiguration extends WebSecurityConfigurationAdapter  {

}
