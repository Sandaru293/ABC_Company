package lk.ijse.frontend.servlet;

/**
 * @author Sandaru Kithshan <skithshan93@gmail.com> (github.com/Sandaru293)
 * @since 10/30/2021
 */
import java.util.List;
import org.springframework.web.multipart.MultipartFile;


public class CrunchifyFileUpload {
    private List<MultipartFile> crunchifyFiles;

    public List<MultipartFile> getFiles() {
        return crunchifyFiles;
    }

    public void setFiles(List<MultipartFile> files) {
        this.crunchifyFiles = files;
    }
}
