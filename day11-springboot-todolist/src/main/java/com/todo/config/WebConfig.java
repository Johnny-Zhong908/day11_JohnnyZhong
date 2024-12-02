package com.todo.config;

import  org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // mapping all path
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("Content-Type", "Authorization") // allowed headers configuration
                .exposedHeaders("Authorization") // response headers that the client can access
                .allowCredentials(true) //Cookie allowed
                .maxAge(3600); //pre-check request cache time is 1 hour
    }
}
