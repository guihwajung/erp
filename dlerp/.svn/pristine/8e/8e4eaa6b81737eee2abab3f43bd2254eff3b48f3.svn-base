package com.goodcen.cenerp.web.password;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Timer;
import java.util.concurrent.locks.ReentrantLock;

import org.springframework.stereotype.Component;

@Component
public class ResetUserPasswordAuthContainer {
	
	private ReentrantLock lock = new ReentrantLock();
	private Map<String, ResetUserPassword> container = new HashMap<>();
	
	public ResetUserPasswordAuthContainer() {
		new Timer().scheduleAtFixedRate(new ResetUserPasswordAuthContainerCleaner(this), 0, 60000);
	}
	
	public void put(ResetUserPassword user) {
		try {
			lock.lock();
			if (container.containsKey(user.getAuthNumber())) {
				container.remove(user.getAuthNumber());
			}
			container.put(user.getAuthNumber(), user);
		} finally {
			lock.unlock();
		}
	}
	
	public ResetUserPassword get(String authNumber) {
		try {
			lock.lock();
			if (container.containsKey(authNumber)) {
				return container.remove(authNumber);
			}
		} finally {
			lock.unlock();
		}
		
		return null;
	}
	
	public void clean() {
		try {
			lock.lock();
			
			for (Iterator<Map.Entry<String, ResetUserPassword>> it = container.entrySet().iterator(); it.hasNext(); ) {
				Map.Entry<String, ResetUserPassword> entry = it.next();
				if (entry.getValue().isOver(180)) {
					it.remove();
				}
			}
		} finally {
			lock.unlock();
		}
	}
	
}
