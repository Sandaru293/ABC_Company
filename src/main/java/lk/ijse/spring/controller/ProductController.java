package lk.ijse.spring.controller;

import lk.ijse.spring.dto.ProductDTO;
import lk.ijse.spring.exception.NotFoundException;
import lk.ijse.spring.service.ProductService;
import lk.ijse.spring.util.StandradResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * @author Sandaru Kithshan <skithshan93@gmail.com> (github.com/Sandaru293)
 * @since 10/18/2021
 */

@RestController
@RequestMapping("/api/v1/product")
public class ProductController {

    @Autowired
    private ProductService service;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveProduct(@RequestBody ProductDTO dto) {
        if (dto.getProName().trim().length() <= 0) {
            throw new NotFoundException("Customer id cannot be empty");
        }
        service.addProduct(dto);
        return new ResponseEntity(new StandradResponse("201", "Done", dto), HttpStatus.CREATED);
    }

    @GetMapping
    public ArrayList<ProductDTO> getAllProducts() {
        return service.getAllProducts();
    }

    @GetMapping(path = "/{proName}")
    public ProductDTO searchProduct(@PathVariable String proName) {
        return service.searchProduct(proName);
    }

    @DeleteMapping(params = {"proName"})
    public String deleteProduct(@RequestParam String proName) {
        boolean b = service.deleteProduct(proName);
        return b + "";
    }

    @PutMapping
    public String updateProduct(@RequestBody ProductDTO dto) {
        boolean b = service.updateProduct(dto);
        return b + "";
    }

}
