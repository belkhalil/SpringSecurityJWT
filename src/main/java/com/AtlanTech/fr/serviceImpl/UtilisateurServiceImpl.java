package com.AtlanTech.fr.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AtlanTech.fr.dao.UtilisateurDao;
import com.AtlanTech.fr.model.UtilisateurEntity;
import com.AtlanTech.fr.service.UtilisateurService;

/**
 * The Class UtilisateurServiceImpl.
 */
@Service
public class UtilisateurServiceImpl implements UtilisateurService {

	/** The utilisateur dao. */
	@Autowired
	private UtilisateurDao utilisateurDao;

	@Override
	public void save(UtilisateurEntity utilisateurEntity) {
		try {
			utilisateurDao.save(utilisateurEntity);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public UtilisateurEntity get(Long id) {
		try {
			return utilisateurDao.findOne(id);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public void Update(UtilisateurEntity utilisateurEntity) {
		try {
			utilisateurDao.saveAndFlush(utilisateurEntity);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public List<UtilisateurEntity> getAll() {
		try {
			return utilisateurDao.findAll();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Boolean delete(Long id) {
		try {
			utilisateurDao.delete(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
