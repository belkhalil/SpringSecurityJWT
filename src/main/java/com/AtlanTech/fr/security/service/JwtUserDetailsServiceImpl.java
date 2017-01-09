package com.AtlanTech.fr.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.AtlanTech.fr.dao.UtilisateurDao;
import com.AtlanTech.fr.model.UtilisateurEntity;
import com.AtlanTech.fr.security.JwtUserFactory;

@Service
public class JwtUserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UtilisateurDao utilisateurDao;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UtilisateurEntity user = utilisateurDao.findByUsername(username);

		if (user == null) {
			throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
		} else {
			return JwtUserFactory.create(user);
		}
	}
}
