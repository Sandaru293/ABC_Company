package lk.ijse.frontend.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

/**
 * @author Sandaru Kithshan <skithshan93@gmail.com> (github.com/Sandaru293)
 * @since 10/21/2021
 */

@WebServlet(urlPatterns = "/up")
@MultipartConfig
public class FileUploadServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        Part uploadedFile = req.getPart("file");

        String submittedFileName = uploadedFile.getSubmittedFileName();

        String realPath = getServletContext().getRealPath("");

        InputStream inputStream = uploadedFile.getInputStream();

        File newFile = new File(realPath + File.separator + submittedFileName);
        newFile.createNewFile();

        FileOutputStream out = new FileOutputStream(newFile);

        int read;
        byte[] buffer = new byte[1024];
        while ((read = inputStream.read(buffer, 0, buffer.length)) != -1) {
            out.write(buffer, 0, buffer.length);
//            resp.getOutputStream().write(buffer, 0, buffer.length);
        }
        out.close();

    }
}
