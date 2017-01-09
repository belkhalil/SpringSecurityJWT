package com.AtlanTech.fr.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.AtlanTech.fr.model.UtilisateurEntity;

/**
 * The Interface UtilisateurService.
 */
@Service
public interface UtilisateurService {

	/**
	 * Save.
	 *
	 * @param utilisateurEntity
	 *            the utilisateur entity
	 * @return the utilisateur entity
	 */
	public void save(UtilisateurEntity utilisateurEntity);

	/**
	 * Gets the.
	 *
	 * @param id
	 *            the id
	 * @return the utilisateur entity
	 */
	public UtilisateurEntity get(Long id);

	/**
	 * Update.
	 *
	 * @param utilisateurEntity
	 *            the utilisateur entity
	 * @return the utilisateur entity
	 */
	public void Update(UtilisateurEntity utilisateurEntity);

	/**
	 * Gets the all.
	 *
	 * @return the all
	 */
	public List<UtilisateurEntity> getAll();

	/**
	 * Delete.
	 *
	 * @param id
	 *            the id
	 * @return the boolean
	 */
	public Boolean delete(Long id);

}
