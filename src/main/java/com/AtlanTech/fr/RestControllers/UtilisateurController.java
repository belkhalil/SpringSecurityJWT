package com.AtlanTech.fr.RestControllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.AtlanTech.fr.model.UtilisateurEntity;
import com.AtlanTech.fr.service.UtilisateurService;

/**
 * The Class UtilisateurController.
 */
@RestController
/*@RequestMapping("/utilisateur")*/
public class UtilisateurController {

	@Value("${jwt.header}")
	private String tokenHeader;

	/** The utilisateur service. */
	@Autowired
	private UtilisateurService utilisateurService;

	/**
	 * Adds the.
	 *
	 * @param utilisateurEntity
	 *            the utilisateur entity
	 * @return the response entity
	 */
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResponseEntity<UtilisateurEntity> add(@RequestBody UtilisateurEntity utilisateurEntity) {
		utilisateurService.save(utilisateurEntity);
		return new ResponseEntity<UtilisateurEntity>(utilisateurEntity, HttpStatus.CREATED);

	}

	/**
	 * Gets the one.
	 *
	 * @param utilisateurEntity
	 *            the utilisateur entity
	 * @return the one
	 */
	@RequestMapping(value = "/getOne", method = RequestMethod.GET)
	public ResponseEntity<UtilisateurEntity> getOne(@RequestBody UtilisateurEntity utilisateurEntity) {
		UtilisateurEntity utilisateurEntity2 = utilisateurService.get(utilisateurEntity.getId());
		if (utilisateurEntity2 == null) {
			return new ResponseEntity<UtilisateurEntity>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<UtilisateurEntity>(utilisateurEntity2, HttpStatus.OK);

	}

	/**
	 * Gets the all.
	 *
	 * @return the all
	 */
	@RequestMapping(path = "/getAllUsers", method = RequestMethod.GET)
	public ResponseEntity<List<UtilisateurEntity>> getAll() {
		
		List<UtilisateurEntity> utilisateurEntities = utilisateurService.getAll();
		if (utilisateurEntities.isEmpty()) {
			return new ResponseEntity<List<UtilisateurEntity>>(HttpStatus.NO_CONTENT);
			}
		return new ResponseEntity<List<UtilisateurEntity>>(utilisateurEntities, HttpStatus.OK);
	}

	/**
	 * Delete.
	 *
	 * @param id
	 *            the id
	 * @return the response entity
	 */
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public ResponseEntity<UtilisateurEntity> delete(@RequestBody Long id) {
		UtilisateurEntity utilisateurEntity = utilisateurService.get(id);
		if (utilisateurEntity == null) {
			return new ResponseEntity<UtilisateurEntity>(HttpStatus.NOT_FOUND);
		} else {
			utilisateurService.delete(id);
			return new ResponseEntity<UtilisateurEntity>(HttpStatus.OK);
		}
	}

	/**
	 * Update.
	 *
	 * @param utilisateurEntity
	 *            the utilisateur entity
	 * @return the response entity
	 */
	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public ResponseEntity<UtilisateurEntity> update(@RequestBody UtilisateurEntity utilisateurEntity) {
		utilisateurService.Update(utilisateurEntity);
		return new ResponseEntity<UtilisateurEntity>(HttpStatus.OK);
	}
}
