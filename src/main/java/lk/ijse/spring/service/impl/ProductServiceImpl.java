package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.ProductDTO;
import lk.ijse.spring.entity.Product;
import lk.ijse.spring.repo.ProductRepo;
import lk.ijse.spring.service.ProductService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author Sandaru Kithshan <skithshan93@gmail.com> (github.com/Sandaru293)
 * @since 10/18/2021
 */

@Service
@Transactional
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public boolean addProduct(ProductDTO dto) {
        productRepo.save(mapper.map(dto, Product.class));
        return true;
    }

    @Override
    public boolean deleteProduct(String proName) {
        productRepo.deleteById(proName);
        return true;
    }

    @Override
    public ProductDTO searchProduct(String proName) {
        Optional<Product> product = productRepo.findById(proName);
        if (product.isPresent()) {
            return mapper.map(product.get(), ProductDTO.class);
        }
        return null;
    }

    @Override
    public ArrayList<ProductDTO> getAllProducts() {
        List<Product> all = productRepo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<ProductDTO>>() {
        }.getType());
    }

    @Override
    public boolean updateProduct(ProductDTO dto) {
        productRepo.save(mapper.map(dto, Product.class));
        return true;
    }
}
