package lk.ijse.spring.service;

import lk.ijse.spring.dto.ProductDTO;

import java.util.ArrayList;

/**
 * @author Sandaru Kithshan <skithshan93@gmail.com> (github.com/Sandaru293)
 * @since 10/18/2021
 */
public interface ProductService {
    boolean addProduct(ProductDTO dto);

    boolean deleteProduct(String proName);

    ProductDTO searchProduct(String proName);

    ArrayList<ProductDTO> getAllProducts();

    boolean updateProduct(ProductDTO dto);
}
