package com.example.security.configuration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

public abstract class WebSecurityConfigurationAdapter {
    protected abstract void configure(HttpSecurity http) throws Exception;
}
