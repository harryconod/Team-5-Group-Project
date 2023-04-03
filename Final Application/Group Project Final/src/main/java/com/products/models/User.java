package com.products.models;

/**
 * Creates user entity in the database which can be used by the rest of the code to allow for login
 * functionality
 * 
 * @author  Isra Shire and Harry Conod
*/


import jakarta.persistence.*;

@Entity
@Table (name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	
    private String name;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private UserRole userRole;
    private Boolean locked;
    private Boolean enabled;

    public User(String name,
                           String email,
                           String password,
                           UserRole userRole) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.userRole = userRole;
        locked = false;
        enabled = true;

    }
    
    public User(String name,
			            String email,
			            String password) {
		this.name = name;
		this.email = email;
		this.password = password;
		locked = false;
		enabled = true;

}

    public User() {
		super();
	}

	
    public String getPassword() {
        return password;
    }
    public String getUsername(){
        return email;
    }

    public boolean isEnabled() {
        return enabled;
    }

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public UserRole getApplicationUserRole() {
		return userRole;
	}

	public void setApplicationUserRole(UserRole userRole) {
		this.userRole = userRole;
	}

	public Boolean getLocked() {
		return locked;
	}

	public void setLocked(Boolean locked) {
		this.locked = locked;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setPassword(String password) {
		this.password = password;
	}
    
    
}

