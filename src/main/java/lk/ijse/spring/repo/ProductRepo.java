package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Sandaru Kithshan <skithshan93@gmail.com> (github.com/Sandaru293)
 * @since 10/18/2021
 */
public interface ProductRepo extends JpaRepository<Product, String> {
}
