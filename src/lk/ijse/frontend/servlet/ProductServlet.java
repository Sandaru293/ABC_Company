package lk.ijse.frontend.servlet;

import javax.json.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

/**
 * @author Sandaru Kithshan <skithshan93@gmail.com> (github.com/Sandaru293)
 * @since 10/18/2021
 */

@WebServlet(urlPatterns = "/product")
public class ProductServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/ABC_Company", "root", "mysql");
            PreparedStatement pstm = connection.prepareStatement("select * from Product");
            ResultSet rst = pstm.executeQuery();
            PrintWriter writer = resp.getWriter();
            resp.setContentType("application/json");

            JsonArrayBuilder allProducts = Json.createArrayBuilder();

            while (rst.next()) {
                String proName = rst.getString(1);
                String proType = rst.getString(2);
                String size = rst.getString(3);
                String price = rst.getString(4);

                JsonObjectBuilder product = Json.createObjectBuilder();
                product.add("proName", proName);
                product.add("proType", proType);
                product.add("size", size);
                product.add("price", price);
            }

            writer.print(allProducts.build());
            writer.close();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String proName = req.getParameter("proName");
        String proType = req.getParameter("proType");
        String size = req.getParameter("size");
        String price = req.getParameter("price");

        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/ABC_Company", "root", "mysql");
            PreparedStatement pstm = connection.prepareStatement("insert into Product values(?,?,?,?)");
            pstm.setObject(1, proName);
            pstm.setObject(2, proType);
            pstm.setObject(3, size);
            pstm.setObject(4, price);
            int i = pstm.executeUpdate();

            PrintWriter writer = resp.getWriter();
            resp.setContentType("application/json");
            if (i > 0) {
                writer.write("{\"operation\":\"success\"}");
            }
            writer.close();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        JsonReader reader = Json.createReader(req.getReader());
        JsonObject product = reader.readObject();
        String proName = product.getString("proName");
        String proType = product.getString("proType");
        String size = product.getString("size");
        String price = product.getString("price");

        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/ABC_Company", "root", "mysql");
            PreparedStatement pstm = connection.prepareStatement("update Product set proType=?,size=?,price=? where proName=?");
            pstm.setObject(1, proType );
            pstm.setObject(2, size );
            pstm.setObject(3, price);
            pstm.setObject(4, proName);
            int i = pstm.executeUpdate();
            PrintWriter writer = resp.getWriter();
            resp.setContentType("application/json");
            if (i > 0) {
                JsonObjectBuilder response = Json.createObjectBuilder();
                response.add("operation", "success");
                writer.print(response.build());
            }
            writer.close();

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }


    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String proName = req.getParameter("proName");
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/ABC_Company", "root", "mysql");
            PreparedStatement pstm = connection.prepareStatement("delete from Product  where proName=?");
            pstm.setObject(1, proName);
            int i = pstm.executeUpdate();
            PrintWriter writer = resp.getWriter();
            resp.setContentType("application/json");
            if (i > 0) {
                JsonObjectBuilder response = Json.createObjectBuilder();
                response.add("operation", "success");
                writer.print(response.build());
            }
            writer.close();

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
}
