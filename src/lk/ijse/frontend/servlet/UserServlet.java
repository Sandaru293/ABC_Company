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
 * @since 10/22/2021
 */
@WebServlet(urlPatterns = "/user")
public class UserServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/ABC_Company", "root", "mysql");
            PreparedStatement pstm = connection.prepareStatement("select * from User");
            ResultSet rst = pstm.executeQuery();
            PrintWriter writer = resp.getWriter();
            resp.setContentType("application/json");

            JsonArrayBuilder allUsers = Json.createArrayBuilder();

            while (rst.next()) {
                String userId = rst.getString(1);
                String password = rst.getString(2);

                JsonObjectBuilder user = Json.createObjectBuilder();
                user.add("userId", userId);
                user.add("password", password);

                allUsers.add(user.build());
            }

            writer.print(allUsers.build());
            writer.close();
        }

        catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String userId = req.getParameter("userId");
        String password = req.getParameter("password");


        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/ABC_Company", "root", "mysql");
            PreparedStatement pstm = connection.prepareStatement("insert into User values(?,?)");
            pstm.setObject(1, userId);
            pstm.setObject(2, password);

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
        JsonObject user = reader.readObject();
        String userId = user.getString("userId");
        String password = user.getString("password");


        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/ABC_Company", "root", "mysql");
            PreparedStatement pstm = connection.prepareStatement("update User set password=? where userId=?");
            pstm.setObject(1, password );
            pstm.setObject(2, userId);
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
        String userId = req.getParameter("userId");
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/ABC_Company", "root", "mysql");
            PreparedStatement pstm = connection.prepareStatement("delete from User  where userId=?");
            pstm.setObject(1, userId);
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
