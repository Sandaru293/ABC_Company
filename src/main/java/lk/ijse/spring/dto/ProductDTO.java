package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Sandaru Kithshan <skithshan93@gmail.com> (github.com/Sandaru293)
 * @since 10/18/2021
 */

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductDTO {
    private String proType;
    private String proName;
    private String size;
    private String price;
}
